import { CREATED } from 'http-status-codes';
import { Request, Response } from 'express';

import CreateUserUserCase from '../../../../../../src/business/User/use-cases/create/CreateUserUseCase';
import CreateUserController from '../../../../../../src/application/controllers/user/create/CreateUserController';

describe('#CreateUserController', () => {
  let controller;
  let createUserUseCase: CreateUserUserCase;
  let mockRequest: Request;
  let mockResponse: Response;
  let json;
  let fetcher;
  let creator;
  let mailProvider;

  beforeEach(() => {
    fetcher = {
      fetchByEmail: jest.fn(),
    };
    creator = {
      create: jest.fn().mockResolvedValue(true),
    };

    mailProvider = {
      sendEmail: jest.fn(),
    };

    createUserUseCase = new CreateUserUserCase(fetcher, creator, mailProvider);

    mockRequest = {
      body: {
        name: 'richard',
        email: 'richard@teste.com',
        password: '123@123',
      },
    } as Request;

    json = jest.fn();

    mockResponse = {
      status: jest.fn().mockReturnValue({
        json,
      }),
    } as unknown as Response;

    controller = new CreateUserController(createUserUseCase);
  });

  describe('#CreateUserController', () => {
    it('Should create a user controler', () => {
      expect(controller).toBeInstanceOf(CreateUserController);
    });

    it('Should call service functions and set controller params', async () => {
      await controller.handle(mockRequest, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(CREATED);
    });
  });
});

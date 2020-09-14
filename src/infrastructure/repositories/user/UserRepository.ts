import { IUserRepository } from '../../../business/use-cases/user/IUserRepository';
import User from '../../../business/use-cases/user/entities/User';

export default class UserRepository implements IUserRepository {
  private users: User[] = [];

  async fetchByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async create(user: User): Promise<void> {
    this.users.push(user);
  }
}

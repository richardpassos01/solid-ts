import { IUsersRepository } from '../../../business/use-cases/user/create/IUsersRepository';
import User from '../../../business/use-cases/user/entities/User';

export default class UserRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}

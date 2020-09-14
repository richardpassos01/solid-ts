import { queryBuilder, GenericDatabase } from '../Database';
import { IUserRepository } from '../../../business/use-cases/user/IUserRepository';
import User from '../../../business/use-cases/user/entities/User';

const tableName = 'users';

export default class UserRepository implements IUserRepository {
  public queryBuilder: GenericDatabase<User>;

  constructor() {
    this.queryBuilder = queryBuilder;
  }

  async fetchByEmail(email: string): Promise<User> {
    const users = await this.queryBuilder.select('*')
      .from(tableName)
      .where('email', email);

    return users[0];
  }

  async create(user: User): Promise<void> {
    await this.queryBuilder(tableName).insert({
      name: user.name,
      email: user.email,
      password_hash: user.password,
    });
  }

  async fetch(id: string): Promise<User> {
    const users = await this.queryBuilder.select('*')
      .from(tableName)
      .where('id', id);

    return users[0];
  }
}

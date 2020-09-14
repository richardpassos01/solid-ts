import { GenericCreatable, GenericFetchableByEmail } from '../../shared/Contracts';
import User from './entities/User';

type Creatable = GenericCreatable<User>;

type FetchableByEmail = GenericFetchableByEmail<string, User>;

export interface IUserRepository extends Creatable, FetchableByEmail { }

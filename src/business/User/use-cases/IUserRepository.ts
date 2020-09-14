import { GenericCreatable, GenericFetchableByEmail, GenericFetchable } from '../../shared/Contracts';
import User from '../User';

type Creatable = GenericCreatable<User>;

type FetchableByEmail = GenericFetchableByEmail<string, User>;

type Fetchable = GenericFetchable<string, User>;

export interface IUserRepository extends Creatable, FetchableByEmail, Fetchable { }

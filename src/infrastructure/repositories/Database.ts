import { connection } from '../../../database/relational';

const queryBuilder = connection();

interface GenericDatabase<Entity> {
  (tableName: string);
  insert(args: Entity): Promise<Entity>;
  select(args?: string);
  from(tableName: string);
  where(field: string, value: string);
}

export {
  GenericDatabase,
  queryBuilder,
};

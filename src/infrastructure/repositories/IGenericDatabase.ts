interface IGenericDatabase<Entity> {
  (tableName: string);
  insert(args: Entity): Promise<Entity>;
  select(args?: string);
  from(tableName: string);
  where(field: string, value: string);
}

export default IGenericDatabase;

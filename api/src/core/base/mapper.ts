export abstract class Mapper<I, O> {
  abstract create(param: I): Promise<O>;
  abstract get(param: O): I;
}

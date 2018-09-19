export class ModelTransform {
  public static Transform<O, D>(body: O | any, destinyModel: D | any) {
    try {
      if (body instanceof Object && destinyModel instanceof Object) {
        if (Array.isArray(body)) {
          return body.map(data => new destinyModel(data));
        }

        return new destinyModel(body);
      }

      throw new Error('Invalid operation.');
    } catch (error) {
      console.error(error);
    }
  }
}

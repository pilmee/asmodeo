export class ModelTransform {
  public static Transform<O, D>(body: O | any, destinyModel: D | any) {
    try {
      if (Array.isArray(body)) {
        return body.map(data => new destinyModel(data));
      }

      return new destinyModel(body);
    } catch (error) {
      console.error(error);
    }
  }
}

class Result<T> {
  status: boolean;
  message: string | null;
  data: T | null;
  total: number | null;

  constructor(status: boolean, message: string | null, data: T | null, total: number | null) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.total = total;
  }

  static success(): Result<null> {
    return new Result(true, null, null, null);
  }

  static successWithData<T>(data: T): Result<T> {
    return new Result(true, null, data, null);
  }

  static successWithList<T>(data: T, total: number): Result<T> {
    return new Result(true, null, data, total);
  }

  static fail(message: string): Result<null> {
    return new Result(false, message, null, null);
  }
}
export default Result;

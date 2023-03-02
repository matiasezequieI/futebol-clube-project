export default class ErrorStatus extends Error {
  constructor(stack: string, message: string) {
    super(message);
    this.stack = stack;
  }
}

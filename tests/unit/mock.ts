// tslint:disable max-classes-per-file

/**
 * Mock browser only errors.
 */
(global as any).DOMException = class DOMExceptionMock extends Error {
  constructor() {
    super();
    Object.setPrototypeOf(this, DOMExceptionMock.prototype);
  }
};

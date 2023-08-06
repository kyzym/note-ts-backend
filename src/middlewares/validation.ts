import { NextFunction, Request } from 'express';
import { AnySchema } from 'joi';

class ExtendedError extends Error {
  status: number;
  originalError: Error;

  constructor(originalError: Error) {
    super(originalError.message);
    this.status = 400;
    this.originalError = originalError;
  }
}

export const validation = (schema: AnySchema) => {
  return (req: Request, _: unknown, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(new ExtendedError(error));
    }
    next();
  };
};

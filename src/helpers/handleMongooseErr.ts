interface MongoError extends Error {
  name: string;
  code: number;
  status?: number;
}

const isConflict = ({ name, code }: MongoError): boolean => {
  return name === 'MongoServerError' && code === 11000;
};

export const handleErrors = (
  error: MongoError,
  data: any,
  next: Function
): void => {
  error.status = isConflict(error) ? 409 : 400;

  next();
};

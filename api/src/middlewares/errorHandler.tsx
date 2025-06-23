import type { Request, Response, NextFunction, Handler } from "express";

// Custom error class
class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor)
  }
}

const errorHandler =
  (err: AppError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({ message: err.message || "Internal Server Error" })
  }

export { AppError, errorHandler }
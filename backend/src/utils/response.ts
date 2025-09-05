import { Response } from "express";

// Success Response
export const successResponse = (
  res: Response,
  data: any,
  message = "Success",
  statusCode = 200
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

// Error Response
export const errorResponse = (
  res: Response,
  error: any,
  statusCode = 500
) => {
  return res.status(statusCode).json({
    success: false,
    message: error.message || "Something went wrong",
  });
};

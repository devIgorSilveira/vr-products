import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

const validateBodyMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.body = validatedData;

      return next();
    } catch (error: any) {
      return res.status(400).json({
        error: error.errors,
      });
    }
  };

export default validateBodyMiddleware;

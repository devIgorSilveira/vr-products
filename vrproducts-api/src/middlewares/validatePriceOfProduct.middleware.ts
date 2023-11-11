import { Request, Response, NextFunction } from "express";

const validatePriceOfProductMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.price || req.body.salePrice) {
    let price = req.body.price || req.body.salePrice;

    const numbers = price.toString().split(".");

    const isThirteen = numbers[0].length > 13;
    const isThree = numbers[1] && numbers[1].length > 3;

    if (isThirteen || isThree) {
      return res
        .status(400)
        .json({ message: "The price must follow the model (13.3)" });
    }
  }

  return next();
};

export default validatePriceOfProductMiddleware;

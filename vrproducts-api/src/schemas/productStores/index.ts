import * as yup from "yup";

export const ProductStoreRequestSchema = yup.object().shape({
  salePrice: yup.number().positive().required(),
});

export const ProductStoreUpdateSchema = yup.object().shape({
  salePrice: yup.number().positive().notRequired(),
});

import * as yup from "yup";

export const productRequestSchema = yup.object().shape({
  description: yup.string().required().max(60),
  price: yup.number().positive().notRequired(),
  image: yup.string().notRequired(),
});

export const productUpdateSchema = yup.object().shape({
  description: yup.string().notRequired().max(60),
  price: yup.number().positive().notRequired(),
  image: yup.string().notRequired(),
});

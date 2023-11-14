import * as yup from "yup";

export const storeRequestSchema = yup.object().shape({
  description: yup.string().required().max(60),
});

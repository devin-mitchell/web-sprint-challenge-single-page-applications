import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("username is required")
    .min(2, "username must be 2 characters long"),
  size: yup
    .string()
    .oneOf(["small", "medium", "large", "huge"], "size is required"),
  onions: yup.boolean(),
  olives: yup.boolean(),
  peppers: yup.boolean(),
  spinach: yup.boolean(),
  special: yup
    .string()
    .required("must fill out instructions")
    .min(5, "minimum of 5 characters")
    
});
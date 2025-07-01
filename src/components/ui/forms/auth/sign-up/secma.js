import * as yup from "yup";

export const SignUpSchema = yup.object({
  email: yup
    .string()
    .required("Enter your E-mail")
    .email("Enter a valid E-mail")
    .matches(
      /^[a-zA-Z0-9._%+-]+@(gmail|outlook)\.com$/,
      "The E-mail must be @gmail.com or @outlook.com"
    ),
  password: yup
    .string()
    .required("Enter the Password")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm your password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  name: yup
    .string()
    .required("Enter your name")
    .min(2, "Name must be at least 2 characters")
    .matches(/^[A-Za-z ]+$/, "Name can only contain letters and spaces"),
});

import * as yup from "yup"; // for everything

export let validationSchemaOne = yup.object({
  firstName: yup
    .string()
    .required("Please enter your First Name")
    .min(3, "First name must contain at least 3 characters"),
  lastName: yup
    .string()
    .required("Please enter your Last Name")
    .min(3, "Last name must contain at least 3 characters"),
  emailAddress: yup
    .string()
    .email()
    .required("Please enter valid email Address"),
  password: yup
    .string()
    .min(5, "Password must contain atleast 5 characters")
    .required("Please enter valid password"),
});

export let validationSchemaTwo = yup.object({
  description: yup
    .string()
    .min(50, "(Description < 50) Enter more words...")
    .required(),

  github: yup.string().url().required(),

  linkeden: yup.string().url().required(),

  facebook: yup.string().url().required(),
});

export let validationSchemaThree = yup.object().shape({
  BankAccount: yup.string().required(),
  AccountNumber: yup
    .number()
    .min(13, "Your account number contains 13 characters")
    .required(),
});

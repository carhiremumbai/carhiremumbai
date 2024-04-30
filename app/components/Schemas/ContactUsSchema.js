import * as Yup from "yup";

export const ContactUsSchema = Yup.object({
  name: Yup.string().min(2).max(14).required("Name is required"),
  phone: Yup.string().min(10).max(11).required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});

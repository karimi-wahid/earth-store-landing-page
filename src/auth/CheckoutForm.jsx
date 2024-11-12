import * as Yup from 'yup';

export const userSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    companyName: Yup.string(),
    countryName: Yup.string().required("Country name is required"),
    streetAdd: Yup.string().required("Street Address is required"),
    apartment: Yup.string(),
    townCity: Yup.string().required("City or Town name is required"),
    zipCode: Yup.string().required("Zip or Postal code is required"),
    phone: Yup.string().required("Your phone number is required"),
    email: Yup.string().email("Invalid email address").required("Your email address is required"),
    note: Yup.string(),
    paymentMethod: Yup.string().required("Payment method is required"),
    couponCode: Yup.string(),
});
const validation = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "Email Required";
  } else if (values.email.length < 5) {
    errors.name = "Email must be more than 5 char";
  }

  if (!values.password) {
    errors.email =
      "Masukkan email dan password yang benar. Perhatikan penggunaan huruf kapital";
  } else if (values.password.length < 5) {
    errors.email = "Password must be more than 5 char";
  }

  return errors;
};

export default validation;

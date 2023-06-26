const validation = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Name Required";
  } else if (values.name.length < 5) {
    errors.name = "Name must be more than 5 char";
  }

  if (!values.password) {
    errors.name =
      "Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital";
  } else if (values.password.length < 5) {
    errors.name = "Password must be more than 5 char";
  }

  return errors;
};

export default validation;

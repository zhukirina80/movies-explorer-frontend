import { useState, useCallback } from 'react';

function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});

    let formIsValid = true;

    if (name === 'name') {
      const isValidName = value.length >= 2 && value.length <= 40;
      setErrors({...errors, [name]: isValidName ? '' : 'Имя должно содержать от 2 до 40 символов!'});
    } else if (name === 'email') {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const isValidEmail = emailRegex.test(value);
      setErrors({...errors, [name]: isValidEmail ? '' : 'Пожалуйста, введите корректный Email!'});
    } else if (name === 'password') {
      const isValidPassword = value.length >= 6;
      setErrors({...errors, [name]: isValidPassword ? '' : 'Пароль должен содержать не менее 6 символов!'});
    } else {
      setErrors({...errors, [name]: target.validationMessage });
    }

    for (const field in errors) {
      if (errors[field]) {
        formIsValid = false;
        break;
      }
    }
  
    setIsValid(formIsValid && target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, setValues, handleChange, errors, isValid, resetForm };
}

export default useFormWithValidation;
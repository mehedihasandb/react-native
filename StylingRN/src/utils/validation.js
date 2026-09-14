export function validateAuth(values, register) {
  const errors = {};
  if (register && values.name.trim().length < 2)
    errors.name = "Enter your full name (at least 2 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Enter a valid email address.";
  if (values.password.length < 8)
    errors.password = "Use at least 8 characters.";
  if (register && values.confirmPassword !== values.password)
    errors.confirmPassword = "Passwords do not match.";
  return errors;
}

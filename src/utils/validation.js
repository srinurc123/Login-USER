// Validate email must contain '@'
export function validateEmail(email) {
  return email.includes('@');
}

// Validate phone number: exactly 10 digits
export function validatePhoneNumber(phone) {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
}

// Validate password: @, number, min 8 chars
export function validatePassword(password) {
  if (password.length < 8) return false;
  if (!password.includes('@')) return false;
  if (!/[0-9]/.test(password)) return false;
  return true;
}

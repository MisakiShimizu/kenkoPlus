export const ValidateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
};

export const ValidatePassword = (password) => {
  if (/^[a-z0-9_-]{6,16}$/.test(password)) {
    return true;
  }
  alert("Passwords must be at least 6 characters long");
  return false;
};

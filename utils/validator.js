export const isValidUsername = (username) => /^[A-Za-z0-9]{6,25}$/.test(username)

export const isValidPassword = (password) => password.length >= 1

// export const isValidEmail = (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

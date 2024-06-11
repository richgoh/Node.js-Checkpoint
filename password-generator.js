const generator = require('generator-password');

function generateRandomPassword(options) {
    return generateRandomPassword.generate(options);
}
const passwordOptions = {
    length: 10,
    numbers : true,
    uppercase: true,
    symbols: true
};
const newPassword = generateRandomPassword(passwordoptions);
console.log('New password generated :', newPassword);
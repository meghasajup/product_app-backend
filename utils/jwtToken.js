const jwt = require("jsonwebtoken");
const secretKey = process.env.jwtSecretKey

const jwtToken = async (user, password) => {

    const userData = { user, password }
    const options = {
        expiresIn: "1h",
        audience: 'entri-user', 
        issuer: 'emtri'
    }

    let token = await jwt.sign(userData, secretKey);
    return token;
}

module.exports = { jwtToken };
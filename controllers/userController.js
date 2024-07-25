const UserModel = require('../models/users');
const { jwtToken } = require('../utils/jwtToken');
const SignUpJoi = require('../validation/signUpJoi')
const bcrypt = require('bcrypt');

const SignUp = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        await SignUpJoi.validateAsync(data);

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt);

        const toSave = new UserModel(data);
        await toSave.save();
        res.status(200).send('Added successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
}



const Login = async (req, res) => {
    try {
        const data = req.body;
        await SignUpJoi.validateAsync(data);

        const user = await UserModel.findOne({ email: req.body.email });
        if (!user) throw new Error("User not found");

        // Debugging logs
        console.log("Provided Password:", req.body.password);
        console.log("Stored Hashed Password:", user.password);

        // Compare the password
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) throw new Error("Invalid password");

        const token = await jwtToken(isMatch.email, isMatch.password)
        // console.log(token);

        res.status(200).send({ status: true, message: "Success", token: token });
    } catch (error) {
        res.status(500).send({ status: false, error: error.message });
    }
}


module.exports = { SignUp, Login }
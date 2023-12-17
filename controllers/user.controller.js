const User = require('../models/user');

module.exports.Register = async(req, res) => {

    try{
        console.log(req.body);

        const {
            firstName,
            lastName,
            age,
            mobile,
            email,
            gender,
            slot,
            startDate,
        } = req.body;

        const newUser = new User ({
            firstName,
            lastName,
            age,
            mobile,
            email,
            gender,
            slot,
            startDate,
            paymentDone: true
        })

        await newUser.save();

        return res.status(200).json({
            success: true,
            data: {
                user: newUser,
                message: "User Saved Successfully"
            }
        })
    }catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            data: {
                message: "Internal server error",
                error
            }
        })
    }
}

module.exports.notFound = (req, res) => {
    return res.status(200).json({
        success: false,
        message: "Page not found"
    })
}
const User = require('../models/userModel');
const userController = {
    getUsers: async (req, res) => {
        try {
            const loggedInId = req.user._id;
            const loggedInUsers = await User.findOne({ _id: { $ne: loggedInId } }).select("-password");
            res.status(200).json(loggedInUsers);

        } catch (e) {
            console.log(e);
            next(e);

        }




    }

}

module.exports = userController;
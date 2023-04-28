const User = require("../models/User");

//@desc     Update user
//@route    PUT /api/v1/user
//@access   Private
exports.updateUser = async (req, res, next) => {
  try {
    // check if email already exists
    const user = await User.findOneAndUpdate({ email }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      console.log("No user found");
      return res.status(400).json({ success: false });
    }
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedUserId = req.user._id;

    const allUsers = await User.find({ _id: { $ne: loggedUserId } }).select(
      "-password"
    );

    if (!allUsers) return res.status(404).json({ error: "No users found" });

    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

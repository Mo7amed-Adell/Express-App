import * as UserService from "../services/userServices.js"

export const getAllUsers = async(req, res) => {
 try {
  const users = UserService.getAllUsers();
  res.json(users);
 }catch(err) {
   res.status(500).json({ error: "Could not fetch users" });
 }
}
export const getProfile = async (req, res) => {
 try{
  const user = UserService.getUserById(req.user.id);
  res.json(user);
 }catch(err) {
   res.status(500).json({ error: "Could not load profile" });
 }

}

export const updateProfile = async(req, res) => {
 try{
 const user = UserService.updateUser(req.user.id);
 } catch(err) {
    res.status(500).json({ error: "Could not update profile" });
 }

}

export const deleteAccount = async (req, res) => {
  try {
    await userService.deleteUser(req.user.id);
    res.json({ message: "Account deleted" });
  } catch (err) {
    res.status(500).json({ error: "Could not delete account" });
  }
};
import * as authService from "../services/authService.js";

export const register = async(req, res) => {
 try {
  const user = await authService.register(req.body);
   res.status(201).json({ message: "User created", user });
 } catch(err) {
   res.status(400).json({ error: err.message });
 }
}

export const login = async (req, res) => {
  try {
    const token = await authService.login(req.body);
    res.json({ message: "Logged in", token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
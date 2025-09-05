import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/User";

const JWT_SECRET = process.env.JWT_SECRET || "secret123";

export const registerUser = async (
  name: string,
  email: string,
  password: string,
  role: "student" | "instructor"
): Promise<IUser> => {
  const existing = await User.findOne({ email });
  if (existing) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword, role });
  await user.save();

  return user;
};

export const loginUser = async (
  email: string,
  password: string
): Promise<{ token: string; user: IUser }> => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { id: user._id, role: user.role },
    JWT_SECRET,
    { expiresIn: "7d" }
  );

  return { token, user };
};

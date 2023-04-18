import { hash } from "bcrypt";
import { query } from "./db";

export default async function signup(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Please provide username and password" });
  }

  const hashedPassword = await hash(password, 10);

  try {
    const results = await query(
      `
        INSERT INTO users (username, password)
        VALUES (?, ?);
      `,
      [username, hashedPassword]
    );
    return res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";
import cookie from "cookie";

const secret = "supersecret";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { userName, password } = req.body;

  // Verify userName and password
  const isValid = await compare(password, hashedPasswordFromDB);

  if (!isValid) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Generate JWT token
  const token = sign({ userName }, secret, { expiresIn: "1h" });

  // Set token as cookie
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600,
      path: "/",
    })
  );

  return res.status(200).json({ message: "Login successful" });
};

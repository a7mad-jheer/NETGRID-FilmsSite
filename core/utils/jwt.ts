import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "secret"; // مفتاح التوقيع

export function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return (decoded as { id: string }).id; // ترجع الـ userID
  } catch (err) {
    return null;
  }
}

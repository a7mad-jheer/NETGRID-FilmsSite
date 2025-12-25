import bcryptjs from "bcryptjs"
import User from '../models/user';

/* signup auth */
export async function signupUser(data: { name: string, username: string, email: string, password: string }) {
  try {
    const hashedPassword = await bcryptjs.hash(data.password, 10);


    const user = await User.create({
      name: data.name,
      username: data.username,
      email: data.email,
      password: hashedPassword,
    })

    return { success: true, user };
  } catch (err: any) {
    return { success: false, message: err.message }
  }
}



/* login auth */
export async function loginUser(data: { email: string, password: string }) {
  try {
    const user = await User.findOne({ email: data.email }).select("+password")

    const isPasswordCorrect = user && await bcryptjs.compare(data.password, user.password);

    if (!user || !isPasswordCorrect) {
      return { success: false, message: "Falid Credintials" }
    }

    return {
      success: true, user: {
        id: user._id,
        name: user.name,
        email: user.email,
        username: user.username,
      },
    }

  } catch (err: any) {
    return { success: false, message: err.message }
  }
}
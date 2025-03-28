import jwt from "jsonwebtoken";

const adminLogin = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      // Create a payload with meaningful claims
      const payload = {
        email: email,
        isAdmin: true,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
        expiresIn: "3h",
      });

      return res.status(200).json({ success: true, token });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials." });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error." });
  }
};

export { adminLogin };

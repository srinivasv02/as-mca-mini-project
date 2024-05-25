import jwt from "jsonwebtoken";

const JWT_SECRET = "8477e3ca94a98f9afef2167960aebdac4e818db4677e59fcd934542eca20d67acd20aabd7eb2e19d9d5393a0e9ad2b8b8bc4c93d2d266a37977128f455cc7118"; // Hardcoded secret key

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, JWT_SECRET, {
        expiresIn: "15d",
    });

    res.cookie("jwt", token, {
        maxAge: 45 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
    });
};

export default generateTokenAndSetCookie;

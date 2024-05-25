import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// Manually specify the JWT secret key
const JWT_SECRET = "8477e3ca94a98f9afef2167960aebdac4e818db4677e59fcd934542eca20d67acd20aabd7eb2e19d9d5393a0e9ad2b8b8bc4c93d2d266a37977128f455cc7118";

const protectRoute = async (req, res, next) => {
	try {
		const token = req.cookies.jwt;

		if (!token) {
			return res.status(401).json({ error: "Unauthorized - No Token Provided" });
		}

		// Verify the token using the manually specified JWT secret key
		const decoded = jwt.verify(token, JWT_SECRET);

		if (!decoded) {
			return res.status(401).json({ error: "Unauthorized - Invalid Token" });
		}

		const user = await User.findById(decoded.userId).select("-password");

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		req.user = user;

		next();
	} catch (error) {
		console.log("Error in protectRoute middleware: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export default protectRoute;

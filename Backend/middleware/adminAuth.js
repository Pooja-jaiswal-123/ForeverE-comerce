import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization; // ✅ Correct way to get token
        if (!token) {
            return res.status(401).json({ success: false, message: "Not Authorized" });
        }

        const token_decode = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET); // ✅ Fix token extraction

        // ✅ Properly check admin credentials
        if (token_decode.email !== process.env.ADMIN_EMAIL || token_decode.password !== process.env.ADMIN_PASSWORD) {
            return res.status(403).json({ success: false, message: "Not Authorized" });
        }

        next();
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export default adminAuth;

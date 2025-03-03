import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    email: { type: String, required: true, unique: true }, // ✅ Fix
    password: { type: String, required: true }, // ✅ Fix
    cartData: { type: Object, default: {} }
}, { minimize: false });

// ✅ Correct model definition
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;

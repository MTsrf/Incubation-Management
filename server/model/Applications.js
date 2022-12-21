import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    isAdmin: Boolean,
    name: String,
    phone_number: Number,
    email: String,
    password: String,
    application: Object,
    bookingSlot: [{
        Slot: String,
        isBooked: Boolean,
        ApplicationId: mongoose.Schema.Types.ObjectId
    }],
    isApplied: Boolean
}, { timestamps: true })

export default mongoose.model("Application", applicationSchema)
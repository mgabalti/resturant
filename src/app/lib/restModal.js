const { default: mongoose } = require("mongoose");

const restSchema = new mongoose.Schema({
    email: String,
    password: String,
    c_password: String,
    name: String,
    city: String,
    address: String,
    contact: String,
});


const restaurantSchema = mongoose.models.restaurants || mongoose.model("restaurants", restSchema);
export default restaurantSchema;
const { mongo, default: mongoose } = require("mongoose")

const foodsSchema = new mongoose.Schema({
   name:String,
   price:Number,
   imgPath:String,
   descriptin:String,
   resto_id:mongoose.Schema.Types.ObjectId,
   
})
const restaurantSchema = mongoose.models.foods || mongoose.model("foods", foodsSchema);
export default restaurantSchema;

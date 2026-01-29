import mongoose , {Schema} from "mongoose";

const imageSchema = new Schema({
    image_url : {type : String , required : true,},
    public_id : {type: String , required : true,}
})

const userSchema = new Schema ({
    name : {type : String , required : true,},
    userName : {type : String,},
    email : {type : String , required: true,},
    password : {type : String , required : true , select : false},
    avatar : imageSchema, 
    topTenRated : {type : [String] , max : 10 ,},
    moviesRated : [{type : Schema.Types.ObjectId , ref : "MoviesReview",}],
    favorite : [{type : String},],
    bio : {type : String , max: 500 , default : "no bio",},
    createdAt : {type : Date , default : Date.now,},
})

const User = mongoose.models.User|| mongoose.model("User" , userSchema)
export default User;






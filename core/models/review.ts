import mongoose , {Schema} from "mongoose"

const moviesReviewSchema = new Schema ({
    moviesId : {type : String , required : true},
    userId : {type : String , required : true},
    reviewText : {type : String , required : true},
    likes : [{type : Schema.Types.ObjectId , ref : "User" , unique : true}],
    replyDocument : [{type : Schema.Types.ObjectId , ref : "ReviewReply" , required : true}],
    createAt : {type : Date , default : Date.now},
})

const MoviesReview = mongoose.models.MoviesReview || mongoose.model("MoviesReview" ,moviesReviewSchema );
export default MoviesReview;







































// import mongoose , {Schema} from "mongoose";

// const moviesReviewSchema = new Schema({
//     moveisId : {type : String , required : true},
//     userId : {type : Schema.Types.ObjectId , ref : "User" , required : true},
//     reviewText : {type : String , required : true},
//     rating : {type : Number , required : true , min : 0 , max: 10},
//     likes : [{type : Schema.Types.ObjectId , ref : "User" , unique : true}],
//     createdAt : {type : Date , default : Date.now}
// })

// const MoviesReview = mongoose.models.MoviesReview || mongoose.model("MoviesReview" , moviesReviewSchema);
// export default MoviesReview;
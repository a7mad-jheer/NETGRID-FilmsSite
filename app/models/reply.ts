import mongoose , {Schema} from "mongoose";

const reviewReplySchema = new Schema({
    reviewId : {type : Schema.Types.ObjectId , ref : "MoviesReview"},
    userId : {type:String , requird : true},
    moviesId : {type: String , requird : true},
    content : {type : String , requird : true},
    likes: {type : Schema.Types.ObjectId , ref : "User"},
    createdAt : {type : Date , default : Date.now}
})

const ReviewReplayMovies = mongoose.models.ReviewReplayMovies || mongoose.model("ReviewReplayMovies" ,reviewReplySchema )
export default ReviewReplayMovies;



































// import mongooes , {Schema} from "mongoose";


// const reviewReplySchema = new Schema({
//     reviewId: {type: Schema.Types.ObjectId , ref : "MoviesReview" , required: true},
//     userId : {type : Schema.Types.ObjectId , ref : "User" , required : true},
//     content : {type : String , required : true},
//     likes : [{type : Schema.Types.ObjectId , ref : "User"}],
//     createdAt : {type: Date , default : Date.now}, 
// })

// const ReviewReply = mongooes.models.ReviewReply || mongooes.model("ReviewReply" , reviewReplySchema);
// export default ReviewReply
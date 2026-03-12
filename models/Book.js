const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({

title:{
type:String,
required:true
},

author:{
type:String,
required:true
},

isbn:{
type:String,
required:true,
unique:true
},

genre:{
type:String,
required:true
},

publisher:{
type:String,
required:true
},

publicationYear:{
type:Number
},

totalCopies:{
type:Number,
min:0
},

availableCopies:{
type:Number
},

shelfLocation:{
type:String
},

bookType:{
type:String
},

status:{
type:String,
default:"Available"
}

});

module.exports = mongoose.model("Book", BookSchema);
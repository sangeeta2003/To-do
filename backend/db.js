const mongoose = require('mongoose')
const { boolean } = require('zod')
// mongodb+srv://cohort:<password>@cluster0.j7aeciz.mongodb.net/
mongoose.connect("mongodb+srv://mishrasangeeta944:sangeeta2024@cluster0.na8fe1v.mongodb.net/")
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
}


)
const todo = mongoose.model('todos',todoSchema);
module.exports={
    todo
}
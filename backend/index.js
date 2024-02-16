// with express josn middleware
const express = require('express')
const {todo} = require('./db')
const {createTodo,updateTodo} = require('./type')
const app = express()

app.use(express.json())

app.get('/todos',async function(req,res){
const todos = await todo.find({})
res.json({
    todos
})

})
app.post('/todo',async function(req,res){
    const createPayload = req.body()
const parsePayload = createTodo.safeParse(createPayload)
if(!parsePayload.success){
    res.status(411).json({
        msg:"you sent the wrong input"
    })
    return;
}
// put it in mongoose  
await todo.create({
    title:createPayload.title,
    description :createPayload.description,
    completed:false
})
res.json({
    msg:"todo created"
})
})
app.put('/completed',async function(req,res){
    const updatePayload = req.body()
    const parsePayload = updateTodo.safeParse(updatePayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you sent the wrong input"
        })
        return;
    }
    await todo.update({
        _id:req.body.id

    },
    {
        completed:true
    })
    res.json({
        msg:"todo marked as completed"
    })
})
app.listen(3000)
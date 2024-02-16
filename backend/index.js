// with express josn middleware
const express = require('express')

const {createTodo,updateTodo} = require('./type')
const app = express()

app.use(express.json())

app.get('/todo',function(req,res){


})
app.post('/todos',function(req,res){
    const createPayload = req.body()
const parsePayload = createTodo.safeParse(createPayload)
if(!parsePayload.success){
    res.status(411).json({
        msg:"you sent the wrong input"
    })
    return;
}
})
app.put('/completed',function(req,res){
    const updatePayload = req.body()
    const parsePayload = updateTodo.safeParse(updatePayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you sent the wrong input"
        })
        return;
    }
})
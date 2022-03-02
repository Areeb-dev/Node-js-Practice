const express = require("express")
const app = express()

const todos = ["First index"];
app.use(express.json());

app.get("/Todo", (req, res) => {
  return  res.send(todos)
})
app.post("/Todo", (req, res) => {
    console.log(req.body)
    todos.push(req.body.name)
   return res.send("create Todo")
})

app.delete("/Todo/:id", (req, res) => {
    // req.params.id
    return res.send("deleteTodo Response send")
})

 app.put("/Todo", (req, res) => {
    return res.send("putTodo Response send")
 })

app.listen(3000, () => {
    console.log("App is runing port 3000")
})
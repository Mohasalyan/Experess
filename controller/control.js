const ToDo=[
    {
    id : 1,desc: "cesar salad"
},
{
    id:2,desc:"pasta penne"
},
{
    id:3,desc:"pizza "
},

{
    id :4 ,desc:"burger"
}];
const control = {
    getTodo : (req,res) =>{
        res.send(ToDo);
    },
    getTodoID: (req,res) =>{
        const sId = parseInt(req.params.id);
    const todo = ToDo.find((todo) => todo.id===sId);
    if (todo){
        res.status(200).send(todo)
    }else
    res.status(404).send("to do not found !!")
    },
    postTodo:(req,res) => {
        const id = ToDo.length +1 
        const desc = req.body.desc;
        const item ={
            id: id,
            desc: desc
        };
        ToDo.push(item);
        res.status(201).send(item)

        },
        putTodo : (req,res) =>{
            const sId = parseInt(req.params.id)
            const dis = req.body.desc;
            const todo = ToDo.find((todo) => todo.id === sId);
            if(!todo){
            return res.status(404).send("todo not found ")
        }
        todo.desc =dis;
        res.json(todo);
    },
    deleteTodo : (req, res) => {
        const sId = parseInt(req.params.id)
        const todoDelete = ToDo.findIndex((todo) => todo.id===sId);
        if (todoDelete === -1 ) res.status(404).send(" todo not found ")
        ToDo.splice(todoDelete , 1);
    res.status(204).send();
    }
};
module.exports = control ;
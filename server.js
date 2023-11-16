const express = require('express')// طريقة قديمة لعمل import
const dotenv = require('dotenv')
dotenv.config({path:'./config/config.env'});
const port = process.env.PORT
const app = express()// call back 
const users = []


app.use(express.json())
//HELP METHODS 

//HTTP 
//GET ==> Retrive Data يعني اجيب داتا
app.get('/', (request,response)=> {
    response.send("welcome to home")
})
app.get('/users', (request,response) => {
    if(users.length == 0 ){
        response.status(404).send('No users found')
    }
response.status(200).send(users)
})
//POST ==> to create data 
app.post('/users', (request, response)=>{
    const user = request.body
    const findUser = users.find( (x) => x.id ===user.id )
    const newUserId = users.length + 1;
    user.id = newUserId;

    if (findUser){
        response.status(400).send('user already exist');
        return
    }
   // console.log(request.body)
    users.push(user)
    response.status(201).json(users).send('created!')
})
//PUT 

//DELETE
app.delete('/users/:id' , (request , response ) => {
    const {id}= request.params
    const findUserIndex = users.findIndex((x) => x.id ===id )
    if(findUserIndex == -1 ){
        response.status(400).send("user not found!")
        return
    }
    users.splice(findUserIndex,1)
    response.status(200).send("user deleted succesfully ")
})
app.listen(port, ()=> {
console.log(`server running ${port}`)
})
const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server,{
    cors:{
        origin:'*',
    }
})


let users = [];
const addUser = (userId, socketId) => {
            !users.some((user)=>user.userId === userId) && 
        users.push({userId, socketId});
}
const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}
io.on('connection', socket =>{
    console.log('connection made successfully')
    socket.on('message',payload => {
        console.log('Message received on server: ', payload)
        io.emit('message',payload)
    });
    socket.on("addUser", userId => {
        addUser(userId, socket.id);
        io.emit("getUsers", users);
    });
    
    socket.on("disconnect", ()=>{
    removeUser(socket.id);
    io.emit("getUsers", users);
    });
})




server.listen(7000,()=>{
    console.log('I am listening at port: 7000)');
})
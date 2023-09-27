const express=require('express');
const app=express();
const mysqlConnection=require('./initDB');

const route=require('./route');
app.use('/insient',route);

app.listen(3000,()=>{
    console.log("Server started on Port: 3000 ");
});
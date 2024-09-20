const express=require('express');
const morgan=require('morgan');
const app=new express();
app.use(morgan('dev'));
app.use(express.static('public'));


app.set('view engine','ejs');  //requiring ejs
app.set('views',__dirname+'/views');

const nav=[
    {link:'/user/employee',name:'Home'},
    {link:'/user/employeeform',name:'ADD Employee'}
]



const basicroutes=require('./routes/basicroutes')(nav);
app.use('/user',basicroutes);


app.listen(4000,()=>{
    console.log('server is running on port 4000');
})
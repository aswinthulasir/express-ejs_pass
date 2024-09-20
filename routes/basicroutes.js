const express=require('express');
const router=express.Router();

// router.use(express.json());
// router.use(express.urlencoded({extended:true}))

const data=[{employeeid:1,name:'John', location:'TVM'},{employeeid:2,name:'Manu', location:'TVM'},{employeeid:3,name:'Ajit', location:'TVM'}]


function basicroutess(nav) {
    


router.get('/employee', (req,res)=>{
    res.render("employee",{
        nav,
        title:'Employeelist',
        data
    }); 
});

router.get('/employeeform', (req,res)=>{
    res.render("employeeform",{
        title:'Employee Form',
        nav
    })
})

return router;


}
module.exports=basicroutess   //exported the function
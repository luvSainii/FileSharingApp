const router = require('express').Router();
const multer = require('multer');
const path = require('path')

let storage = multer.diskStorage({
    destination:(req,file,cb)=> cb(null, 'uploads/'),
    filename: (req,file,cb) =>{
        const uniqueName = `${Date.now()}-${Math.round(Math.round()*1E9)}${path.extname(file.originalname)}`;
        cb(null,uniqueName);
    }
})

let upload = multer({
    storage,
    limit:{fileSize :1000000*100},
}).single('myfile')

router.post('/',(req,res)=>{
    //valildation
    if(!req.file){
        return res.json({error:"All fields are required"})
    }
    // store file
    upload(req,res,(err)=>{
        if (err) {
            return res.status(500).send({error:err.message})
        }
        
    })
})



module. exports = router;
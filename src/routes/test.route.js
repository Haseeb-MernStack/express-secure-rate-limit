import express from "express";
const router = express.Router();

router.get("/ping", (req,res)=>{
    res.json({success:true, message:"Pong 🏓"});
});

export default router;
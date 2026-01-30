
const express = require("express");
const app = express();
app.use(express.json());

let bans = []; // replace with DB later

app.post("/ban", (req,res)=>{
 const {userid, reason, staff} = req.body;
 bans.push({userid, reason, staff, time:Date.now()});
 res.json({success:true});
});

app.get("/bans", (req,res)=>{
 res.json(bans);
});

app.listen(3000, ()=>console.log("Backend running"));

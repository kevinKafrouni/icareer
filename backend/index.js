import express from "express"
import mysql from "mysql2"
import cors from "cors"
const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"kevin",
    password:"k1772002k",
    database:"icareer"
})
app.use(express.json());
app.use(cors());

/*working with industries*/
app.get("/industries",(req,res)=>{
    const industryId = req.query.industryId;
    if(industryId){
        /*fetch a specific industry data*/
        const q = "SELECT * FROM industries WHERE industry_id = ?"
        db.query(q,[industryId],(err,data)=>{
            if(err) return res.json(err);
            return res.json(data);
        })
    }else{
        /*fetch all the industries*/
        const q = "SELECT * FROM industries;"
        db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
    }
    
})
/*geting the specialization of a given industry*/

app.get("/specs",(req,res)=>{
    const industryId = req.query.industryId;
    const q = "SELECT * FROM specialization WHERE industry_id= ?";

    db.query(q,[industryId],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8000,()=>{
    console.log("connected to backend");
})
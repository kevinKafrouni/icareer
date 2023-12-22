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
/*get specialization given a specialization id*/
app.get("/spec",(req,res)=>{
    const specId = req.query.specId
    const q = "SELECT * FROM specialization WHERE spec_id = ?"

    db.query(q,[specId],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

/*get skills of a specialization*/
app.get("/skills",(req,res)=>{
    const specId = req.query.specId;
    const q = "SELECT skill_name,skill_description FROM path_skills NATURAL JOIN learning_path NATURAL JOIN skills WHERE spec_id = ?"

    db.query(q,[specId],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})



/*save a user */
app.post("/register/user",(req,res)=>{
    const userData = req.body;
    console.log(userData);

    const q="INSERT INTO user set ?";
    db.query(q,userData,(err,result)=>{
        if(err) return res.json(err)
        return res.json(result);
    })
})


/*save a company */
app.post("/register/company",(req,res)=>{
    const companyData = req.body;
    console.log(companyData);

    const q="INSERT INTO company set ?";
    db.query(q,companyData,(err,result)=>{
        console.log(err);
        if(err) return res.json(err)
        return res.json(result);
    })
})


app.listen(8000,()=>{
    console.log("connected to backend");
})
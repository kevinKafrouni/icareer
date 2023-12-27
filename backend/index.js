import express from "express"
import mysql from "mysql2"
import cors from "cors"
import session from "express-session"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"

const app = express()
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"youssef121",
    database:"icareer"
})
app.use(express.json());
app.use(cors(
  {
    origin: ["http://localhost:3000"],
    methods: ["GET","POST"],
    credentials: true
  }
));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  key:"user",
  secret:"kevinkey",
  resave:false,
  saveUninitialized:false,
  cookie: {
      expires:60*60*24*1000
    },
}))


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

/*check login*/
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    // Check the provided credentials against the user table in the database
    const userQuery = "SELECT first_name, last_name, email FROM user WHERE email = ? AND password = ? LIMIT 1";
    db.query(userQuery, [email, password], (err, data) => {
      if (err) return res.json(err);
      if (data.length === 1) {
        req.session.user = data;
        return res.json({type:"user",data});
      } else {
        const companyQuery = "SELECT company_name,email,company_logo FROM company WHERE email = ? AND password = ? LIMIT 1";
        db.query(companyQuery, [email, password], (companyerr, companydata) => {
          if (companyerr) {
            return res.json(companyerr);
          }
          if (companydata.length === 1) {
            req.session.company = companydata;
            return res.json({ type: "company", companydata });
          } else {
            return res.json(err);
          }
        });
      }
    });
  });


/*check if user is logged in*/
  app.get('/checklogin', (req, res) => {
    if (req.session.user) {
      const {first_name,last_name,email} = req.session.user[0];
      let userName = first_name+" "+last_name;
      return res.json({ isLoggedIn: true,type:"user",name:userName,email:email});
      
    } else if(req.session.company){
      console.log(req.session.company);
      const {company_name,email,company_logo} = req.session.company[0]
        console.log("comp");
        return res.json({ isLoggedIn: true,type:"company",name:company_name,email:email,logo:company_logo});
    }else{
      console.log("testelse")
        return res.json({ isLoggedIn: false });
        
    }
  });


  /*get job application possible statuses*/

  app.get('/statuslist',(req,res)=>{
    const q = "SELECT app_status_id as 'id',app_status_name as 'title' FROM application_status WHERE app_status_id !=5"
    db.query(q,(err,data)=>{
      if(err) return res.json(err);
      return res.json(data);
    })
  })

  /*get all aplication for a given job */

  app.get('/jobapplications',(req,res)=>{
    const jobid = req.query.jobid;//get this from the clicked job
    const q = "SELECT application_id,first_name,last_name,email,pdf_cv,app_status_id,app_status_name as 'status' FROM job_applications natural join user natural join jobs natural join application_status WHERE job_id=?"

    db.query(q,[jobid],(err,data)=>{
      if(err) return res.json(err);
      return res.json(data);
    })
  })


  /*change an application status  */
  app.post('/jobapp/changestatus',(req,res)=>{
    const {id,statid} = req.body;
    const q = "UPDATE job_applications SET app_status_id=? ,status_change_date=NOW() WHERE application_id=?"
    db.query(q,[statid,id],(err,result)=>{
      if(err) return res.json(err);
      return res.json(result);
    })
    
  })

  /*get the jobs posted by the current loged recruter */
  app.get('/jobsposted',(req,res)=>{
    const recruterid = 1;//get this id from the logged user session
    const q = "SELECT job_id,job_title,DATE_FORMAT(job_close_date, '%d-%m-%Y') as 'close_date',DATE_FORMAT(job_posted_date, '%d-%m-%Y') as 'post_date',spec_name FROM jobs NATURAL JOIN specialization WHERE company_id=? AND job_close_date > CURRENT_DATE;"

    db.query(q,[recruterid],(err,data)=>{
      if(err) return res.json(err)
      return res.json(data);
    })
  })
  
app.listen(8000,()=>{
    console.log("connected to backend");
})
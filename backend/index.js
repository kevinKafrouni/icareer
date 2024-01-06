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
    password:"youssef",
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

app.get("/industrieslist",(req,res)=>{
  const q = "SELECT industry_id,industry_name as 'name' FROM  industries";

  db.query(q,(err,data)=>{
    if(err) return res.json(err);
    return res.json(data);
  })
})
/*get all the specializations ==this is specific for post job element */
app.get("/getAllSpecs",(req,res)=>{
  const q = "SELECT spec_id as 'value',spec_name as 'label' FROM specialization";

  db.query(q,(err,data)=>{
      if(err) return res.json(err);
      return res.json(data);
  })
})
/*geting the specialization of a given industry*/
app.get("/specs",(req,res)=>{
    const industryId = req.query.industryId;
    const q = `SELECT s.*, COALESCE(j.job_count, 0) AS job_count
                FROM specialization s
                LEFT JOIN (
                    SELECT COUNT(*) AS job_count, spec_id
                    FROM jobs
                    GROUP BY spec_id
                ) j ON s.spec_id = j.spec_id
                WHERE s.industry_id = ?;
                `;

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
/*get the locations */
app.get("/locations",(req,res)=>{
  const q = "SELECT location_id as 'value',location_name as 'label' FROM location"
  db.query(q,(err,data)=>{
    if(err) return res.json(err);
    return res.json(data);
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
    const company = {
      company_id:companyData.company_id,
      company_name:companyData.company_name,
      company_description:companyData.company_description,
      company_logo:companyData.company_logo,
      email:companyData.company_email,
      password:companyData.company_password,
      phone_number:companyData.phone_number,
      location_id:companyData.clocation_id
    }
    console.log(companyData);
    console.log(company);

    const q="INSERT INTO company set ?";
    db.query(q,company,(err,result)=>{
        console.log(err);
        if(err) return res.json(err)
        return res.json(result);
    })
})

/*check login*/
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    console.log("tried to log in email : "+email+"password: "+password);
    
    const userQuery = "SELECT user_id,first_name, last_name, email FROM user WHERE email = ? AND password = ? LIMIT 1";
    db.query(userQuery, [email, password], (err, data) => {
      if (err) return res.json(err);
      if (data.length === 1) {
        req.session.user = data;
        return res.json({type:"user",data});
      } else {
        const companyQuery = "SELECT company_id,company_name,email,company_logo FROM company WHERE email = ? AND password = ? LIMIT 1";
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
        return res.json({ isLoggedIn: true,type:"company",name:company_name,email:email,logo:company_logo});
    }else{
      console.log("testelse")
        return res.json({ isLoggedIn: false });
        
    }
  });

  /*update user info*/
  app.post("/update/user",(req,res)=>{
    if(!req.session.user){
      return res.json("not logged in");
    }
    const userData = req.body;
    const userId =  req.session.user[0].user_id;
    console.log(userData);

    const q = "UPDATE user SET ? WHERE user_id= ?";

    db.query(q,[userData,userId],(err,result)=>{
      if(err) return res.json(err)
      return res.json(result);
    })
  })

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
    
    const jobid = req.query.jobid;
    console.log("requested" + jobid);
    const q = "SELECT application_id,first_name,last_name,email,pdf_cv,DATE_FORMAT(application_day, '%d-%m-%Y') as 'application_day',app_status_id,app_status_name as 'status' FROM job_applications natural join user natural join jobs natural join application_status WHERE job_id=?"

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
    const recruterid = req.session.company[0].company_id;
    const q = "SELECT job_id,job_title,DATE_FORMAT(job_close_date, '%d-%m-%Y') as 'close_date',DATE_FORMAT(job_posted_date, '%d-%m-%Y') as 'post_date',spec_name FROM jobs NATURAL JOIN specialization WHERE company_id=? AND job_close_date > CURRENT_DATE;"

    db.query(q,[recruterid],(err,data)=>{
      if(err) return res.json(err)
      return res.json(data);
    })
  })

  app.get("/jobtypes",(req,res)=>{
    const q = "SELECT job_type_id as 'value', job_type_name as 'label' FROM job_type";
  
    db.query(q,(err,data)=>{
      if(err) return res.json(err);
      return res.json(data);
    })
  })

  /*get all jobs  */
  app.get("/getJobs",(req,res)=>{
    const jobId = req.query.jobId;
    console.log(jobId);
    if(jobId){
      const q =  "SELECT job_id,job_title,job_description,DATE_FORMAT(job_posted_date,'%d-%m-%Y') as posted_date,DATE_FORMAT(job_close_date,'%d-%m-%Y') as close_date, min_salary, max_salary, company_name, company_logo, email, location_name, spec_name, job_type_name FROM jobs natural join company natural join specialization natural join job_type natural join location WHERE job_id = ?";

      db.query(q,[jobId],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
      })
    }else{
    const q = "SELECT job_id,job_title,DATE_FORMAT(job_posted_date,'%d-%m-%Y') as posted_date,DATE_FORMAT(job_close_date,'%d-%m-%Y') as close_date, min_salary, max_salary, company_name, company_logo, email, location_name, spec_name, job_type_name FROM jobs natural join company natural join specialization natural join job_type natural join location"

    db.query(q,(err,data)=>{
      if(err) return res.json(err);
      return res.json(data);
    })
  }
  })


  /*recruter post a job */
  app.post("/postjob",(req,res)=>{

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0'); 

    const curdate = `${year}-${month}-${day}`;
    const jobData = req.body;
    
    if(!req.session.company){
      return res.json("invalid credntials") 
    }
    const companyId = req.session.company[0].company_id;
    jobData.job_posted_date = curdate;
    jobData.company_id = companyId;

    console.log(jobData);
    const q = "INSERT INTO jobs set ? ";

    db.query(q,jobData,(err,result)=>{
      
      if(err) return res.json(err);
      return res.json(result);
    })
  }) 


/* get top companies for a field (sorted by number of jobs posted)*/
app.get("/topcompanies", (req,res)=>{
  const specId = req.query.specId;
  const q = "SELECT COUNT(job_id) as 'nbJobs',company_name,company_logo FROM jobs natural join company WHERE spec_id = ? group by company_id,company_logo order by 'nbJobs' LIMIT 5;"

  db.query(q,[specId],(err,data)=>{
    if(err) return res.json(err);
    return res.json(data);
  })
})

/*get the latest jobs posted fo a specs */
app.get("/latestjobs",(req,res)=>{

  const specId = req.query.specId;

  const q = "SELECT job_id,job_title,job_description,DATE_FORMAT(job_posted_date,'%d-%m-%Y') as posted_date,DATE_FORMAT(job_close_date,'%d-%m-%Y') as close_date, min_salary, max_salary, company_name, company_logo, email, location_name, spec_name, job_type_name FROM jobs natural join company natural join specialization natural join job_type natural join location WHERE spec_id=? order by job_posted_date desc LIMIT 5";
  db.query(q,[specId],(err,data)=>{
    if(err) return res.json(err);
    return res.json(data);
  })
})

/*get the last 20 posted jobs in a 2 element list format */
app.get("/recent20jobs",(req,res)=>{
  const q = "SELECT job_id ,job_title as 'name' FROM jobs order by job_posted_date desc  LIMIT 20";

  db.query(q,(err,data)=>{
    if(err) return res.json(err);
    return res.json(data);
  })
})


app.post("/sendapplication",(req,res)=>{
  if(req.session.user){

    const today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let day = String(today.getDate()).padStart(2, '0'); 
    const curdate = `${year}-${month}-${day}`;

  const jobId = req.body
  const q = "INSERT INTO job_applications set ? ";

  const applicationdetails = {
    application_day: curdate,
    app_status_id: 1,
    user_id:req.session.user[0].user_id,
    job_id:jobId.jobId
  }

  db.query(q,applicationdetails,(err,result)=>{
    if(err) return res.json(err);
    return res.json(result);
  })
  }else{
    return res.json("login");
  }
})
/*get user details */
app.get("/getuserdetails",(req,res)=>{
  if(req.session.user){
    const userId = req.session.user[0].user_id;
    const q="SELECT first_name,last_name,email,pdf_cv,location_id FROM user WHERE user_id = ?";
    db.query(q,[userId],(err,data)=>{
      if(err) return res.json(err);
      return res.json(data);
    })
  }else{
    return res.json("not logged in");
  }
})

/*get user job applications */
app.get("/uapplications",(req,res)=>{
  if(!req.session.user){
    return res.json("not logged in");
  }
  const userId = req.session.user[0].user_id;
  const q = "SELECT application_id,DATE_FORMAT(application_day, '%d-%m-%Y') as application_day,job_title,app_status_name as 'status' FROM job_applications natural join jobs natural join application_status WHERE user_id = ? order by application_day desc";

  db.query(q,[userId],(err,data)=>{
    if(err) return res.json(err);
    return res.json(data)
  })
})
    /*============================ ANDROID specific=========================================*/

    app.post("/androidpostjob",(req,res)=>{
      const today = new Date();
      let year = today.getFullYear();
      let month = String(today.getMonth() + 1).padStart(2, '0');
      let day = String(today.getDate()).padStart(2, '0'); 
      const curdate = `${year}-${month}-${day}`;
  
      const future = new Date(today.getTime() + (30 * 24 * 60 * 60 * 1000));
      year = future.getFullYear();
      month = String(future.getMonth() + 1).padStart(2, '0');
      day = String(future.getDate()).padStart(2, '0'); 
  
      const closedate = `${year}-${month}-${day}`; 
  
      const jobData = req.body;
      
      jobData.job_posted_date = curdate;
      jobData.company_id = 1;  //replace with loggedin mobile recruter
      jobData.job_close_date = closedate;
  
      const q = "INSERT IGNORE INTO jobs set ? ";
  
      db.query(q,jobData,(err,result)=>{
        
        if(err) console.log(err);
        console.log(result);
      })
    }) 
  
    app.get('/androidjobsposted',(req,res)=>{
      const recruterid = 1;//get this id from the logged user session
      const q = "SELECT job_id,job_title,DATE_FORMAT(job_close_date, '%d-%m-%Y') as 'close_date',DATE_FORMAT(job_posted_date, '%d-%m-%Y') as 'post_date',spec_name FROM jobs NATURAL JOIN specialization WHERE company_id=? AND job_close_date > CURRENT_DATE;"
  
      db.query(q,[recruterid],(err,data)=>{
        if(err) console.log(err)
        return res.json(data);
      })
    })
  
app.listen(8000,()=>{
    console.log("connected to backend");
})
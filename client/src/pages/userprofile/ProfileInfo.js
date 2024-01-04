import { useState,useEffect } from "react";
import axios from "axios";
import FormInput from '../../components/ui/FormInput';
function ProfileInfo(){

    
    const [values,setValues] = useState({
        first_name:"test",
        last_name:"",
        email:"",
        pdf_cv:"",
        location_id:"",
    })
    const [locations,setLocations] = useState([]);
    useEffect(()=>{
        const fetchUserInfo = async()=>{
            try{

                const res = await axios.get("http://localhost:8000/getuserdetails");
                setValues(res.data[0]);
            }catch(err){
                console.log(err);
            }
        }
        fetchUserInfo();
    },[])
    useEffect(()=>{
        const fetchLocations = async ()=>{
            try{
                const res = await axios.get("http://localhost:8000/locations");
                setLocations(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchLocations();
    },[])
    console.log(locations);

    const inputs =[
        {
            id:1,
            name:"first_name",
            type:"text",
            errmsg:"name should be 3-16 character long",
            pattern:"^[A-Za-z0-9]{3,16}$",
            required:true,
            title:"First Name"
        },
        {
            id:2,
            name:"last_name",
            type:"text",
            errmsg:"name should be 3-16 character long",
            pattern:"^[A-Za-z0-9]{3,16}$",
            required:true,
            title:"Last Name"
        },
        {
            id:3,
            name:"email",
            type:"email",
            errmsg:"invalid email",
            required:true,
            title:"Email"
        },
        {
            id:4,
            name:"location_id",
            type:"select",
            options:locations,
            title:"Location" 
          }
    ]
    
    const handleChange = (e)=>{
        console.log(e.target);
        setValues({...values,[e.target.name]: e.target.value })
    }


    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:8000/update/user',values);
            console.log(res);
            window.alert("update success")
          }catch(err){
            console.log(err);
          }
    }
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg border">
        <div className="px-4 py-5 sm:px-6 mt-12">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
                User Profile
            </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <form onSubmit={handleSubmit}>
            <div className="sm:divide-y sm:divide-gray-200">
            {inputs.map(input=>{
                return(
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"> 
                    <div className="text-sm font-medium text-gray-500">{input.title}</div>
                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">                   
                        <FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChange}/>
                    </div>
                    </div>
                )

            }
                )}
            </div>
            <div className="text-center md:text-left ml-92">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider mb-12" 
                    type="submit"
                    >Save Changes</button>
                </div>
            </form>
        </div>
    </div>
)
}
export default ProfileInfo;
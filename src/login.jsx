import './login.css'


import { useState } from "react"

const Login =()=>{
    const [name,setname]=useState({
        username:"",
        password:""

    })
    const [show,setshow]=useState(" ")
    const input =(evt)=>{
        const name= evt.target.name;
        const value=evt.target.value;
        setname ((pval)=>{
            return{
                ...pval,
                [name]:value
            }
        })
    }
    const datashow=(evt)=>{
        evt.preventDefault();
        setshow(()=>{
            return(
                <>
                    <table border='2'>
                        <tr><td> username: {name.username}</td></tr>
                        <tr><td> password: {name.password}</td></tr>
                    </table>
                </>
            )
        })
    }
return(
    <>
    <div className='login'>
        <center className='center1'>
        
            <form onSubmit={datashow}>
            <h3>  Login</h3><br/>
            <input type={Text} placeholder="Enter your username" name = "username" onChange={input} required/><br/><br/>
            <input type="password" placeholder="Enter your password" name = "password" onChange={input} required/><br/><br/>
            <input type="submit"/>
            </form>
            
            
        </center>
        </div>
        <h1 className="show"> {show}</h1>
       
    </>
)
}
export default Login
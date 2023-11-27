# MyPortfolio



import React, {useEffect, useState} from "react";



const App =()=>{

  const [saveName, setSaveName] = useState ("");
  const [saveEmail, setSaveEmail] = useState ("");
  const [savePass, setSavePass] = useState ("");
  const [user, setUser] = useState([])
  



  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users"));
    if (savedUsers) {
      setUser(savedUsers);
    }
  }, []);
  

  const handleSubmit =(e)=>{
    e.preventDefault()

     if (!saveName || !saveEmail || !savePass){
      alert ("mandatory")
      return;
     }

    // const newuser ={
    //   saveName,
    //   saveEmail,
    //   savePass,

    // }
     setUser ((user) =>[...user,...saveName, ...saveEmail,...savePass])
  //   setUser(prevState => ({
  //     ...prevState,
  //     name: [ ...saveName],
  //     email: [ ...saveEmail],
  //     password: [ ...savePass]
  //  }));
   

   

  
    setSaveName("");
    setSaveEmail("");
    setSavePass("");

  }
   

  return (
      <div>
        <form onSubmit={handleSubmit} className="form-container">
          <div className=" label-wrapper">
          <label > Name:</label>
        <input className= "input-field" type=" text" 
        placeholder=" enter your name " value={saveName} 
        onChange={(e)=>setSaveName(e.target.value)}/> 
        
       
        </div>
        <div className=" label-wrapper">
        <label  className="label-class"> Email:</label>
        <input className= "input-field" 
        type=" text" placeholder=" enter your email " 
        value={saveEmail} onChange={(e)=>setSaveEmail(e.target.value)}/> 
      
        </div>
        <div className=" label-wrapper">
        <label > Password:</label>
        <input className= "input-field" 
        type=" text" placeholder=" enter your password " 
        value={savePass} onChange={(e)=>setSavePass(e.target.value)}/> 
      
        </div>
        <button  className =" button" type=" submit"
         style= {{ }}
        
        
        
        > Save</button>
        </form>

        <div className="user-list">

        {user.map ((user, index)=>(

          <div   className= "user-item" key={index}>
            
            <p>Name:{user.name}</p>
            <p>email:{user.email}</p>
            <p> pass: {user.pass}</p>
          </div>
        ))}
        </div>
      </div>

  
  )
}

export default App


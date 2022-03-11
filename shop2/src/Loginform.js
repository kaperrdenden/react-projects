import { useState } from "react";

function Loginform(){
    
    let [logindata, setLogindata] = useState({
      id:'',
      password:'',
    });
  
    return(
  
      <>
        <form onSubmit={(e)=>{
          e.preventDefault();
        }}>
          <div className='input-form'>
            <input
              placeholder='id'
              value={logindata.id}
              onChange={(e)=>{
                setLogindata(
                  {
                    ...logindata,
                    id:e.target.value,
                  }
                  )
                  console.log(logindata);
              }
             
            }
              
              />
            <input 
              placeholder='password'
              value={logindata.password}
              onChange={(e)=>{
                setLogindata(
                  {
                    ...logindata,
                    password:e.target.value,
                  }
                  )
                  console.log(logindata);
              }
             
            }
            />
          </div>
          <button 
            className='Login-futton'
            onClick={()=>{
              if (logindata.id.length > 6 && logindata.password.length > 6){
                console.log("corret");
              }
              setLogindata(
                {
                  id:'',
                  password:'',
                }
              )
            }}
            >
            로그인
          </button>
        </form>
  
      </>
    )
  }

  export default Loginform;
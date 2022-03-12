import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Loginform(){
    let history = useHistory();
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
                history.push('/homepage')
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
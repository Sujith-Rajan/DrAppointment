import { createContext,useEffect,useReducer } from "react";

 let role = localStorage.getItem('role')
 const parseRole = JSON.parse(role)
 let token = localStorage.getItem('token')
 const parseToken = JSON.parse(token)

const intialState = {
    user:localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : null,
    role:parseRole || null,
    token:parseToken || null,
    
}

    

export const authContext = createContext(intialState)

const authReducer = (state,action)=>{
    switch (action.type){
        case 'LOGIN_START':
            return{
                user:null,
                role:null,
                token:null,
            }
        case 'LOGIN_SUCCESS':
            return{
                user:action.payload.user,
                role:action.payload.role,
                token:action.payload.token,

            }
            case 'LOGOUT':
                return{
                    user:null,
                    role:null,
                    token:null,
                }
            default:
                break;
    }
}



export const AuthContextProvider= ({children}) => {
    const[state,dispatch] = useReducer(authReducer,intialState)

   useEffect(()=>{
    localStorage.setItem('user',JSON.stringify(state.user))
    localStorage.setItem('token',JSON.stringify(state.token))
    localStorage.setItem('role',JSON.stringify(state.role))
   },[state])

    return <authContext.Provider value={{user:state.user, token:state.token,role:state.role,dispatch}}>
        {children}
    </authContext.Provider>

}


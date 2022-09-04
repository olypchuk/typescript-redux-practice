
import { useReducer } from 'react'
import { useDispatch } from 'react-redux'
// import {useNavigate} from 'react-router-dom'
// import { addUser } from '../../redux/actions'
import { addUser } from '../../redux/slice'

// interface IInitial {
//     name: string,
//     password:string
// }
const INITIAL_STATE
    // : IInitial
    = {
    name: '',
    password:''
}
// const INITIAL_STATE: {
//     name: string,
//     password: string
// }
//     = {
//     name: '',
//     password:''
// }
// type ActionName = {
//     type: 'name',
//     payload: string,
// }
// type ActionPassword = {
//     type: 'password',
//     payload: string,
// }
// type ActionReset = {
//     type: 'reset'
   
// }


// type ActionTypes=ActionName|ActionPassword|ActionReset 
// type ReducerTypes = (state:IInitial,action:ActionTypes) => IInitial


const reducer
    // : ReducerTypes
    = (state
        // : IInitial
        , action
            // : ActionTypes
    ) => {
    
    switch (action.type) {
        case 'name':
           return {...state,name:action.payload}
        case 'password': 
                return {...state,password:action.payload}       
         case 'reset' :  
          
               return INITIAL_STATE
        default:
            return state
           
    }
}

const Authpage = () => {
// const navigate=useNavigate()
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    const reduxDispatch=useDispatch()
    const { name, password } = state
    
    const changeInputValue = ({ target }
    ) => {
        const { name, value } = target 
        dispatch({type:name,payload:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()  
        reduxDispatch(addUser(state))
        // navigate('/homepage')
    }
    
    
    return(<div>Authpage
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="name" onChange={changeInputValue} value={name}/>
            <input type="password" name="password" placeholder="paswword" onChange={changeInputValue} value={password}/>
            <input type="submit" name="submit" />
        </form>
    </div>)
}
export default Authpage
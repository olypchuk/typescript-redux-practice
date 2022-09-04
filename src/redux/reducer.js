const initialState = {
    name: '',
    password: '',
    isLogin:false
}

const reducer = (state=initialState, {type,payload}) => {
   switch (type) {
    case 'auth':
        return{...payload,isLogin:true}
       case 'logout':
           return initialState
   
    default:
       return state;
   } 
}
export default reducer
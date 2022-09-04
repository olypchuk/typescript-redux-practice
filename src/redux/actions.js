
export const addUser = (payload) => {
    return { type: 'auth',payload }
}
export const resetUser = () => {
    
    return {type:'logout'}
}
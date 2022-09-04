import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    password: '',
    isLogin:false
}


const userSlice = createSlice({
    name: 'auth', initialState, reducers: {
        addUser: (_, action) => ({ ...action.payload, isLogin: true }),
        resetUser:()=>initialState
    }
})
export const { addUser, resetUser }=userSlice.actions;
export default userSlice.reducer;
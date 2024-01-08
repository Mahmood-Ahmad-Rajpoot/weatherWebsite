import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    show:false,
}
const navController=createSlice({
    initialState,
    name:'navController',
    reducers:{

        setNav:(state)=>{
            state.show =!state.show;
        }
    }

})
export default navController.reducer;
export const {setNav} = navController.actions
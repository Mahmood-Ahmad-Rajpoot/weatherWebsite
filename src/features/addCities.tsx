import { createSlice } from "@reduxjs/toolkit";
interface ObjectTypes{
    cities:string[],
}
const initialState:ObjectTypes={
    cities:[],
}
const addCities = createSlice({
    initialState,
    name: 'cities',
    reducers:{
       currentCity:(state,action)=> {
        state.cities.push(action.payload)
        console.log(state.cities);
        

       },
        addCity:(state, action)=>{
             
            state.cities.push(`Asia/${action.payload}`);

        }
    }

})
export default addCities.reducer;
export const {currentCity,addCity} = addCities.actions;
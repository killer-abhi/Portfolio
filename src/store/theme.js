import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialThemeState={
    mode:'light',
    uiColor:'purple',
    theme:{
        color:'rgb(0, 31, 63)',
        backgroundColor:"rgb(237, 249, 254)",
    },
    nonThemeColor:'black'
};

const themeSlice=createSlice({
    name:'theme',
    initialState:initialThemeState,
    reducers:{
        changeThemeColor(state,action){
            state.theme.color=action.payload;
        },
        toggleMode(state){
            if(state.mode==='light'){
                state.mode='dark';
                state.theme.color='cyan';
                state.theme.backgroundColor='rgb(0, 31, 63)';
                state.nonThemeColor='white';
            }
            else{
                state.mode='light';
                state.theme=initialThemeState.theme;
                state.nonThemeColor='black';
            }
        }
    }
});
const store=configureStore({
    reducer:themeSlice.reducer
});

export const themeActions=themeSlice.actions;
export default store;
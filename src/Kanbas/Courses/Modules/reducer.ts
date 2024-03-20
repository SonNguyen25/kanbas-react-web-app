import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const modules = db.modules;

const initialState = {
    modules: modules,
    module: {
        _id: "0", name: "New Module",
        description: "New Description",
        lessons: [],
        course: Math.random() || "",
      }
    ,
};


const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, action) => {
      state.modules = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.modules,
      ];
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map((module) => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
  },
});


export const { addModule, deleteModule,
  updateModule, setModule } = modulesSlice.actions;
export default modulesSlice.reducer;
// import createSlice
// import modules from database

// create reducer's initial state with
// default modules copied from database
// default module


// create slice
// name the slice
// set initial state
// declare reducer functions
// new module is in action.payload
// update modules in state adding new module
// at beginning of array. Override _id with
// timestamp


// module ID to delete is in action.payload
// filter out module to delete



// module to update is in action.payload
// replace module whose ID matches
// action.payload._id






// select the module to edit





// export all reducer functions

// export reducer


import "./App.css";
import ClassCounter from "./Components/ClassCounter";
import IntervalClassCounter from "./Components/CounterSimple/IntervalClassCounter";
import IntervalHookCounter from "./Components/CounterSimple/IntervalHookCounter";
import HoockCounterThree from "./Components/HoockCounterThree";
import HookCounter from "./Components/HookCounter";
import HookCounter4 from "./Components/HookCounter4";
import HookCounterTWO from "./Components/HookCounterTWO";
import ClassCounterOne from "./Components/Hooks/ClassCounterOne";
import HookCounterOne from "./Components/Hooks/HookCounterOne";
import FetchAPI from "./Components/HooksApicall/FetchAPI";
import MouseContainer from "./Components/MouseContainer/MouseContainer";
import ComponentRunOnceClass from "./Components/UpdateComponentsHooks/ComponentRunOnceClass";
import HooksRunsOnce from "./Components/UpdateComponentsHooks/HooksRunsOnce";
import ComponentC from "./Components/UseContext/ComponentC";
import React, { useReducer } from "react";
import Cunter1 from "./Components/UseReducer/Cunter1";
import Counter2 from "./Components/UseReducer/Counter2";
import Counter3 from "./Components/UseReducer/Counter3";
import CompA from "./Components/useReducerContext/CompA";
import CompB from "./Components/useReducerContext/CompB";
import CompC from "./Components/useReducerContext/CompC";
import DataFechingOne from "./Components/useReducerWithAPI/DataFechingOne";
import UseReducerAPICall from "./Components/useReducerWithAPI/UseReducerAPICall";
export const UserContext = React.createContext();

export const countContext = React.createContext()

const initialState = 0;
const reducer = (state, action) => {
  // return newState
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};


function App() {
  const [count, disPatch] = useReducer(reducer,initialState)

  return (
    <div className="App">
      {/* <ClassCounter></ClassCounter>
     <HookCounter></HookCounter> */}
      {/* <HookCounterTWO></HookCounterTWO> */}
      {/* <HoockCounterThree></HoockCounterThree> */}
      {/* <HookCounter4></HookCounter4> */}
      {/* <ComponentRunOnceClass></ComponentRunOnceClass> */}
      {/* <HooksRunsOnce></HooksRunsOnce> */}
      {/* <MouseContainer></MouseContainer> */}
      {/* <IntervalClassCounter></IntervalClassCounter>
    <IntervalHookCounter></IntervalHookCounter> */}
      {/* <FetchAPI></FetchAPI> */}
      {/* <UserContext.Provider value={"kishor"}>
        <ComponentC></ComponentC>
      </UserContext.Provider> */}
      {/* <Cunter1></Cunter1> */}
      {/* <Counter2></Counter2> */}
      {/* <Counter3></Counter3> */}
      {/* <countContext.Provider value={{countState:count,countDispatch:disPatch}}>
      <div>
        Count - {count}
      </div>
      <CompA></CompA>
      <CompB></CompB>
      <CompC></CompC>
      </countContext.Provider> */}
      {/* <DataFechingOne></DataFechingOne> */}
    <UseReducerAPICall></UseReducerAPICall>

     
    </div>
  );
}

export default App;

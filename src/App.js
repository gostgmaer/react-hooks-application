import './App.css';
import ClassCounter from './Components/ClassCounter';
import IntervalClassCounter from './Components/CounterSimple/IntervalClassCounter';
import IntervalHookCounter from './Components/CounterSimple/IntervalHookCounter';
import HoockCounterThree from './Components/HoockCounterThree';
import HookCounter from './Components/HookCounter';
import HookCounter4 from './Components/HookCounter4';
import HookCounterTWO from './Components/HookCounterTWO';
import ClassCounterOne from './Components/Hooks/ClassCounterOne';
import HookCounterOne from './Components/Hooks/HookCounterOne';
import FetchAPI from './Components/HooksApicall/FetchAPI';
import MouseContainer from './Components/MouseContainer/MouseContainer';
import ComponentRunOnceClass from './Components/UpdateComponentsHooks/ComponentRunOnceClass';
import HooksRunsOnce from './Components/UpdateComponentsHooks/HooksRunsOnce';

function App() {
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
    <FetchAPI></FetchAPI>
    
    </div>
  );
}

export default App;

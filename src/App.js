import './App.css';
import ClassCounter from './Components/ClassCounter';
import HoockCounterThree from './Components/HoockCounterThree';
import HookCounter from './Components/HookCounter';
import HookCounter4 from './Components/HookCounter4';
import HookCounterTWO from './Components/HookCounterTWO';
import ClassCounterOne from './Components/Hooks/ClassCounterOne';
import HookCounterOne from './Components/Hooks/HookCounterOne';

function App() {
  return (
    <div className="App">
     {/* <ClassCounter></ClassCounter>
     <HookCounter></HookCounter> */}
     {/* <HookCounterTWO></HookCounterTWO> */}
     {/* <HoockCounterThree></HoockCounterThree> */}
     {/* <HookCounter4></HookCounter4> */}
     <ClassCounterOne></ClassCounterOne>
     <HookCounterOne></HookCounterOne>
    </div>
  );
}

export default App;

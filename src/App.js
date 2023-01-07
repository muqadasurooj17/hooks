
import './App.css';
import UseEffectHooks from './UseEffectHooks';
import UseReducerhook from './UseReducerhook';
import Userefhook from './Userefhook';
import UseStateHook from './UseStateHook';
import CalculateFactorial from './UseMemohook';

import useRandomColor from './useRandomColor';
function App() {
  const{color,changecolor}= useRandomColor();
  return (
    <div className="App">
     <>
     <div style={{width:"100vw",height:"100vh",
     backgroundColor:"#" + color}}>
    <button onClick={changecolor}>colorchanging </button>
</div>

     <Userefhook/>
<UseReducerhook/>
<CalculateFactorial/>
     <UseStateHook/>
     <UseEffectHooks/>
     </>
    </div>
  );
}

export default App;

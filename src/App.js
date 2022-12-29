import logo from './logo.svg';
import './App.css';

import TaskList from './components/container/TaskList'
import Example2 from './hooks/Example2';
import ContextComponent from './hooks/Example3';
import Example4 from './hooks/Example4';
import GreetingStyled from './components/pure/greetingStyled';
import TaskComponent from './components/pure/task';
import Father from './components/container/father';
import OptionalRender from './components/pure/OptionalRender';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* <Greeting name="Manwel"></Greeting> */}

        {/* <GreetingF name="Manwel"></GreetingF> */}

        {/* <TaskList></TaskList> */}

        {/* <ComponentA></ComponentA> */}

        {/* <Example2></Example2> */}

        {/* <ContextComponent></ContextComponent> */}

        {/* <Example4 name="Manu" >
          <h3>
            props.children content:
          </h3>
        </Example4> */}

        {/* <GreetingStyled name="Manwel"></GreetingStyled> */}

      {/* </header> */}

      {/* <TaskList></TaskList> */}

      {/* <Father></Father> */}

      <OptionalRender></OptionalRender>

    </div>
  );
}

export default App;

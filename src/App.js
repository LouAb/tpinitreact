import './css/App.css';
import { FirstNode } from './components/FirstNode';
import {SecondNode} from './components/SecondNode';
import {ThirdNode} from './components/ThirdNode';

/**
* Louis Abid
* Version 1.0
*/

function App() {
  return (
    <div className="App">
      <FirstNode class="Digi-header"/>
      <SecondNode class="Digi-main"/>
      <ThirdNode class="Digi-footer"/>
    </div>
  );
}

export default App;

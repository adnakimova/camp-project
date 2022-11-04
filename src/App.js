import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Navigator from './layouts/Navi';

function App() {
  return (
    <div className="App">
      <Navigator/>
        <Container className='main'>
          <Dashboard />
        </Container>



    </div>
  );
}

export default App;

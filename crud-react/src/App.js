import {Fragment} from 'react';
import Navigation from "./Components/Navigation";
import Container from './Components/Component';
import Form from './Components/Form';
import Card from './Components/Card';

const navigation = ["Home", "About", "Service", "Contact"];

function App() {
  return <Fragment>
    <div className="w-full flex items-center justify-between bg-green-400 font-bold text-white">
      <div className="pl-4">
        <h1 className="text-3xl">Logo</h1>
      </div>
      <Navigation nav={navigation} />
    </div>
    <main className="my-6 w-full">
      <Container>
        <Card>
          <Form />
        </Card>
        
      </Container>
    </main>
  </Fragment>
}

export default App;

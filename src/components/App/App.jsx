import {Navbar} from '../Navbar/Navbar';
import {Banner} from '../Banner/Banner';
import {Form} from '../Form/Form';
import './App.css';

function App() {
    return (
        <div className={'app'}>
            <Navbar/>
            <Banner/>
            <Form title='Qual o nome do evento?'>Preencha para criar um evento:</Form>
        </div>
    );
}

export default App;

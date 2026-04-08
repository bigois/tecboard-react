import {Navbar} from '../Navbar/Navbar.jsx';
import {Banner} from '../Banner/Banner.jsx';
import {Form} from '../Form/Form';
import './App.css'

function App() {
    return (
        <div className={'app'}>
            <Navbar/>
            <Banner/>
            <Form title='Qual o nome do evento?'>Preencha para criar um evento</Form>
        </div>
    )
}

export default App

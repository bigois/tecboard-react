import {Navbar} from '../Navbar/Navbar';
import {Banner} from '../Banner/Banner';
import {Form} from '../Form/Form';
import {Subjects} from '../Subjects/Subjects';
import './App.css';
import {useState} from 'react';
import {subjectList} from '../../services/subjectsService';

function App() {
    const [subjectData, setSubjectData] = useState(subjectList);

    return (
        <div className={'app'}>
            <Navbar/>
            <Banner/>
            <Form data={subjectData} setData={setSubjectData}>Preencha para criar um evento:</Form>
            <Subjects/>
        </div>
    );
}

export default App;

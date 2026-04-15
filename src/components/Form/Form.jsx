import './Form.css';
import {subjectList} from '../../services/subjectsService';

// 1. Passagem de properiedades via spread operator
const SpreadInputProps = (props) => {
    return (
        <div className={'field-group'}>
            <label className={'form-label'} htmlFor={props.id}>{props.title}</label>
            <input {...props} autoComplete="off" required/>
        </div>
    );
};

const SpreadSelectProps = (props) => {
    return (
        <div className={'field-group'}>
            <label className={'form-label'} htmlFor={props.id}>{props.title}</label>
            <select {...props} defaultValue={0}>{props.children}</select>
        </div>
    );
};

// 2. Passagem de properiedades via children
export const Form = (props) => {
    return (
        <form className={'form'}>
            <legend className={'form-title'}>{props.children}</legend>
            <fieldset className={'form-fiedlset'}>
                {/* 3. Passagem de properiedades via props */}
                <div className={'field-group-list'}>
                    <SpreadInputProps className={'form-input'} type={'text'} id={'name'} name={'name'}
                                      placeholder={'Summer Dev Hits'} title={'Nome do evento'}/>
                    <SpreadInputProps className={'form-input'} type={'url'} id={'url'} name={'url'}
                                      placeholder={'https:// [...]'} title={'URL da capa'}/>
                    <SpreadInputProps className={'form-input'} type={'date'} id={'date'} name={'date'}
                                      placeholder={'XX/XX/XXXX'} title={'Data do evento'}/>
                    <SpreadSelectProps id={'theme'} name={'theme'} className={'form-input'} title={'Tema do evento'}>
                        <option key={0} value={0} disabled>Selecione uma opção</option>
                        {
                            subjectList.map((subject) => (
                                <option key={subject.id} value={subject.id} className={'form-option'}>{subject.name.toUpperCase()}</option>
                            ))
                        }
                    </SpreadSelectProps>
                </div>
            </fieldset>
            <div className={'form-actions'}>
                <button className={'form-button'}>Criar evento</button>
            </div>
        </form>
    );
};

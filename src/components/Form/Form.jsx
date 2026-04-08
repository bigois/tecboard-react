import './Form.css';

// 1. Passagem de properiedades via spread operator
const SpreadInputProps = (props) => {
    return (
        <div className={'field-group'}>
            <label className={'form-label'} htmlFor={props.id}>{props.title}</label>
            <input {...props}/>
        </div>
    );
};

const SpreadSelectProps = (props) => {
    return (
        <div className={'field-group'}>
            <label className={'form-label'} htmlFor={props.id}>{props.title}</label>
            <select {...props}>{props.children}</select>
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
                    <SpreadInputProps className={'form-input'} type={'date'} id={'date'} name={'date'}
                                      placeholder={'XX/XX/XXXX'} title={'Data do evento'}/>
                    <SpreadSelectProps id={'theme'} name={'theme'} className={'form-input'} title={'Tema do evento'}>
                        <option value=''>Selecione uma opção</option>
                        <option value='tech'>Tecnologia</option>
                        <option value='music'>Música</option>
                        <option value='sports'>Esportes</option>
                        <option value='food'>Gastronomia</option>
                    </SpreadSelectProps>
                </div>
            </fieldset>
            <div className={'form-actions'}>
                <button className={'form-button'}>Criar evento</button>
            </div>
        </form>
    );
};

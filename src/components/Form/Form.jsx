import './Form.css';

// 1. Passagem de properiedades via spread operator
const SpreadInputProps = (props) => {
    return (
        <input {...props}/>
    );
}

// 2. Passagem de properiedades via children
export const Form = (props) => {
    return (
        <form className={'form'}>
            <h2>{props.children}</h2>
            <fieldset>
                {/* 3. Passagem de properiedades via props */}
                <label htmlFor={'name'}>{props.title}</label>
                <SpreadInputProps type={'text'} id={'name'} name={'name'} placeholder={'Summer Dev Hits'}/>
            </fieldset>
        </form>
    );
}

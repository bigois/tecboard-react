import './Form.css';

export const Form = (props) => {
    return (
        <form className={'form'}>
            <h2>{props.children}</h2>
            <fieldset>
                <label htmlFor={'name'}>Qual o nome do evento?</label>
                <input type={'text'} id={'name'} name={'name'} placeholder={'Summer Dev Hits'}/>
            </fieldset>
        </form>
    );
}

import './Form.css';

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
            <select {...props} defaultValue={''} required>{props.children}</select>
        </div>
    );
};

const handleForm = (event, setData) => {
    // Impede o comportamento padrão e permitir que o React capture os dados
    event.preventDefault();

    // Converte os dados do formulário em um objeto
    const formData = new FormData(event.target);
    const entries = Object.fromEntries(formData);

    // Excluí a propriedade theme e adiciona o restante no array de cards
    const {theme, date, ...newEvent} = entries;
    const dateObj = new Date(date);

    // Por fim, captura o estado anterior, adiciona o novo evento e atualiza o estado com a nova lista de dados
    setData(oldData => {
        const newDataList = [...oldData];
        newDataList[parseInt(theme) - 1].cards.push({...newEvent, date: dateObj});
        return newDataList;
    });

    // Limpa o formulário
    event.target.reset();
};

// 2. Passagem de properiedades via children
export const Form = ({children, data, setData}) => {
    return (
        <form className={'form'} onSubmit={(event) => handleForm(event, setData)}>
            <legend className={'form-title'}>{children}</legend>
            <fieldset className={'form-fiedlset'}>
                {/* 3. Passagem de properiedades via props */}
                <div className={'field-group-list'}>
                    <SpreadInputProps className={'form-input'} type={'text'} id={'title'} name={'title'}
                                      placeholder={'Summer Dev Hits'} title={'Nome do evento'}/>
                    <SpreadInputProps className={'form-input'} type={'text'} id={'description'} name={'description'}
                                      placeholder={'Evento de tecnologia para todas as idades.'} title={'Descrição do evento'}/>
                    <SpreadInputProps className={'form-input'} type={'url'} id={'thumb'} name={'thumb'}
                                      placeholder={'https:// [...]'} title={'URL da capa'}/>
                    <SpreadInputProps className={'form-input'} type={'date'} id={'date'} name={'date'}
                                      placeholder={'XX/XX/XXXX'} title={'Data do evento'}/>
                    <SpreadSelectProps id={'theme'} name={'theme'} className={'form-input'} title={'Tema do evento'}>
                        <option key={0} value='' disabled>Selecione uma opção</option>
                        {
                            data.map((subject) => (
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

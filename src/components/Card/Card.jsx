import './Card.css';

export const Card = ({thumb, subject, date, title, description}) => {
    return (
        <section className={'card'}>
            <img src={thumb} alt={'thumb'} className={title}/>
            <div className={'card-container'}>
                <p className={'subject'}>{subject}</p>
                <p className={'date'}>{date.toLocaleDateString('pt-BR')}</p>
                <h4 className={'title'}>{title}</h4>
                <p className={'description'}>{description}</p>
            </div>
        </section>
    );
};

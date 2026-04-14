import './Subjects.css';
import {Card} from '../Card/Card';
import {subjectList} from '../../services/subjectsService';

const Subject = ({title, cards}) => {
    return (
        <section className={'subject'}>
            <h3 className={'title'}>{title}</h3>
            {
                cards.map((card, index) => {
                    return <Card thumb={card.thumb}
                                 subject={title}
                                 date={card.date}
                                 title={card.title}
                                 description={card.description}
                                 key={index}/>;
                })
            }
        </section>
    );
};

export const Subjects = () => {
    return (
        <div className={'subjects'}>
            {subjectList.map((subject) => <Subject title={subject.name} cards={subject.cards}
                                                   key={subject.id}></Subject>)}
        </div>
    );
};

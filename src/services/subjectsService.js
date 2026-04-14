const THUMB_URL = 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_XXX.png';

export const subjectList = [
    {
        id: 1,
        name: 'front-end',
        cards: [
            {
                thumb: THUMB_URL.replace('XXX', '1'),
                title: 'Mulheres no Front',
                date: new Date(),
                description: 'Valorizando e impulsionando a participação feminina no desenvolvimento front-end.'
            },
            {
                thumb: THUMB_URL.replace('XXX', '2'),
                title: 'Pixel & Code',
                date: new Date(),
                description: 'Meetup unindo design e desenvolvimento front-end para explorar tendências em UI.'
            }
        ]
    },
    {
        id: 2,
        name: 'back-end',
        cards: [
            {
                thumb: THUMB_URL.replace('XXX', '3'),
                title: 'Back-End Masters',
                date: new Date(),
                description: 'Performance e inovação no back-end, conectando especialistas e entusiastas.'
            },
            {
                thumb: THUMB_URL.replace('XXX', '4'),
                title: 'Code to Core',
                date: new Date(),
                description: 'Workshop que explora a essência do back-end, escalabilidade e boas práticas.'
            },
            {
                thumb: THUMB_URL.replace('XXX', '5'),
                title: 'Server Side Summit',
                date: new Date(),
                description: 'Evento dedicado a tecnologias e estratégias para desenvolvimento back-end.'
            },
        ]
    },
    {
        id: 3,
        name: 'devops',
        cards: [
            {
                thumb: THUMB_URL.replace('XXX', '6'),
                title: 'DevOps Evolution',
                date: new Date(),
                description: 'Congresso sobre automação, CI/CD, cultura DevOps, tendências e inovações.'
            }
        ]
    },
    {
        id: 4,
        name: 'inteligência artificial',
        cards: [
            {
                thumb: THUMB_URL.replace('XXX', '7'),
                title: 'Deep Learning Days',
                date: new Date(),
                description: 'Imersão sobre IA, redes neurais e aprendizado profundo.'
            },
            {
                thumb: THUMB_URL.replace('XXX', '8'),
                title: 'IA na palma da mão',
                date: new Date(),
                description: 'Workshop IA em dispositivos móveis, aplicando a tecnologia em soluções acessíveis.'
            },
            {
                thumb: THUMB_URL.replace('XXX', '9'),
                title: 'IA Segura e Acessível',
                date: new Date(),
                description: 'Palestra sobre segurança e inclusão em soluções baseadas em inteligência artificial.'
            }
        ]
    },
    {
        id: 5,
        name: 'data science',
        cards: [
            {
                thumb: THUMB_URL.replace('XXX', '10'),
                title: 'Data Pulse',
                date: new Date(),
                description: 'Congresso sobre dados nas decisões estratégicas, análise e inovações da ciência de dados.'
            },
            {
                thumb: THUMB_URL.replace('XXX', '11'),
                title: 'Data Revolution',
                date: new Date(),
                description: 'Palestra sobre últimas tendências em big data, análise e inteligência empresarial.'
            },
            {
                thumb: THUMB_URL.replace('XXX', '12'),
                title: 'Driven by Data',
                date: new Date(),
                description: 'Minicurso sobre como dados impulsionam decisões e inovações para o futuro.'
            },
            {
                thumb: THUMB_URL.replace('XXX', '13'),
                title: 'SQL Summit',
                date: new Date(),
                description: 'Ciclo de palestras com especialistas do universo dos bancos de dados SQL.'
            },
        ]
    },
    {
        id: 6,
        name: 'cloud',
        cards: [
            {
                thumb: THUMB_URL.replace('XXX', '14'),
                title: 'SkyTech Summit',
                date: new Date(),
                description: 'Palestra sobre tendências em computação em nuvem, escalabilidade e infraestrutura.'
            },
            {
                thumb: THUMB_URL.replace('XXX', '15'),
                title: 'Mundo Cloud',
                date: new Date(),
                description: 'Encontro de especialistas e entusiastas para discutir novidades da tecnologia cloud.'
            }
        ]
    }
];
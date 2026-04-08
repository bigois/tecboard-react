import pageBanner from '/banner.png'
import './Banner.css';

export const Banner = () => {
    return (
        <section className={'banner'}>
            <img src={pageBanner} alt={'banner geral'}/>
        </section>
    );
}

import pageBanner from '/banner.png'
import './Banner.css';

export const Banner = () => {
    return (
        <div className={'banner'}>
            <section>
                <img src={pageBanner} alt={'banner geral'}/>
            </section>
        </div>
    );
}

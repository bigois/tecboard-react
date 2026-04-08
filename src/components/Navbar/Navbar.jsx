import pageLogo from '/logo.png';
import './Navbar.css';

export const Navbar = () => {
    return (
        <main className={'navbar'}>
            <header>
                <img src={pageLogo} alt={'page logo'}/>
            </header>
        </main>
    );
};

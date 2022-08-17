import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="0xContrib" />

            <div className='header__content'>
                <h1>Hi, I'm 0xContrib</h1>
                <p>Blockchain Developer</p>
                <a href="mailto:0xcontrib@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;
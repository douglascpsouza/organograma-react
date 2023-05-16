import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/images/fb.png" alt="Facebook logo" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/images/tw.png" alt="Twitter logo" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/images/ig.png" alt="Instagram logo" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/images/logo.png" alt="Organo logo" />
            </section>
            <section>
                <p>Made with <span className='heart'>❤</span></p>
            </section>
            <section className='icon'>
                <a href="https://www.flaticon.com/br/icones-gratis/organograma">Organo icon by Freepik - Flaticon</a>
            </section>
        </footer>
    );
};

export default Footer;

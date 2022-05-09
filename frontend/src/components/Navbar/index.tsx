import { ReactComponent as GitHubIcon } from 'assets/img/github.svg';
import './styles.css'

function Navbar() {

    return (
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>What to Watch ?!</h1>
                    <a href="https://github.com/DaniloArr">
                        <div className='dsmovie-contact-container'>
                            <GitHubIcon />
                            <p className='dsmovie-contact-link'>/DaniloArr</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
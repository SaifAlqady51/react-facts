import ReactIcon from '../Images/logo192.png'

export default function Header(props) {
    

    return (
        <nav className={props.darkMode? 'dark' : ''}>
            <div className='content'> 
                <img className='react-logo' src={ReactIcon} alt='react-logo'></img>
                <h3 className='nav-text'>ReactFacts</h3>
            </div>

        <div className="toggler" >
        <p className="toggler-light">Light</p>
            <div 
                className="toggler-slider"
                onClick={props.toggleDarkMode}
            >
                <div className="toggler-slider-circle"></div>
            </div>
            <p className="toggler-dark">Dark</p>
        </div>
        </nav>

    )
}
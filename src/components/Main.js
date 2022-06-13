

export default function Header(props) {
    return (
        <main className={props.darkMode? 'dark' : ''}>
            <h1 className="main-header">Fun facts about React</h1>
            <ul className="list">
                <li>Was firs released in 2013</li>
                <li>Was originally creatd by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facbook</li>
                <li>Powers thousands o enterprise apps, inclucing mobile apps</li>
            </ul>

        </main>
    )
}
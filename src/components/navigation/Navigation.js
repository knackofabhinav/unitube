import Logo from '../../assets/logo/universe.png'

export const Navigation = () => {
    return(
        <div>
            <div className="navigation">
            <a href="https://universeui.netlify.app/">
            <img src={Logo} alt="logo"/></a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Videos</a></li>
                <li><a href="/">Playlist</a></li>
                <li><a href="/">Search</a></li>
            </ul>
        </div>
        </div>
    )
}
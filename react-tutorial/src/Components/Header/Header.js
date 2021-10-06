import Navigation from "./Navigation";
import logo from '../../static/images/lendmnlogo.svg'

const Header = () => {
    return <header className="header w-full fixed left-0 top-0 z-30 bg-white">
        <div className="container mx-auto flex justify-between items-center">
            <div className="pl-4">
                <img src={logo} alt='logo' />
            </div>
            <Navigation />
        </div>
    </header>
}


export default Header
import logo from '../static/images/Bank-Transparent.png'
const Header = props => {
    const {fullname} = props;
    return <header className="w-full bg-white x-30 py-5 fixed top-0 left-0 flex justify-between shadow-sm items-center">
        <div className="pl-4 flex items-center gap-3">
            <img className="w-8" src={logo} />
            <h1 className="font-bold uppercase">
                Home Back
            </h1>
        </div>
    </header>
}

export default Header;
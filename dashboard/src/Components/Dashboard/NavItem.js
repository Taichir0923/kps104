import { Link } from "react-router-dom";
const NavItem = props => {
    
    const {pth , icon , text , path , changeDir} = props;

    return <div className={`w-full transition duration-300 bg-white menuItem hover:bg-green-700 hover:text-white text-green-700 items-center font-bolder py-2 px-6 flex rounded-xl cursor-pointer gap-3 ${pth === text ? 'active' : ''}`}>
        {icon}
        <p onClick={() => changeDir(text)} className="m-0 text-gray-600">
            <Link to={path}>{text}</Link>        
        </p>
    </div>
}
export default NavItem
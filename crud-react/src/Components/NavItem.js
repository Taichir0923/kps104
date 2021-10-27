import {Link} from 'react-router-dom';
const NavItem = props => {
    return <li className="py-4 px-8 hover:bg-white hover:text-green-400 transition duration-300 cursor-pointer">
        <Link to={props.href}>{props.text}</Link>
    </li>
}

export default NavItem
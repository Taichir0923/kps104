const NavItem = props => {
    return <li className="list-none py-4 px-8 transition duration-300 hover:text-red-400 hover:bg-white cursor-pointer">{props.item}</li>
}

export default NavItem
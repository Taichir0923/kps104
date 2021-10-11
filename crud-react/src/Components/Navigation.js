import NavItem from "./NavItem";
const Navigation = props => {
    return <ul className="flex list-none">
        {
            props.nav.map((list, index) => {
                return <NavItem key={`list-${index}`} text={list} />
            })
        }
    </ul>
}

export default Navigation
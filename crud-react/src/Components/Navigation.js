import NavItem from "./NavItem";
const Navigation = props => {
    return <ul className="flex list-none">
        {
            props.nav.map((list, index) => {
                return <NavItem href={list.path} key={`list-${index}`} text={list.title} />
            })
        }
    </ul>
}

export default Navigation
import NavItem from "./NavItem";
const options = ["Home", "About", "Service", "Contact"]

const Navigation = () => {
    return <div className="nav flex font-bold">
        {
            options.map(item => {
                return <NavItem item={item} />
            })
        }
    </div>
}

export default Navigation;
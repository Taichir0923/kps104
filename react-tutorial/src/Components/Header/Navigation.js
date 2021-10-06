import NavItem from "./NavItem";
import { VscThreeBars } from 'react-icons/vsc';
const options = ["Home", "About", "Service", "Contact"]

const Navigation = () => {
    return <>
        <div className="nav hidden md:flex font-bold">
            {
                options.map((item, index) => {
                    return <NavItem key={`list-${index}`} item={item} />
                })
            }
        </div>
        <div className='md:hidden text-black p-4 text-xl'>
            <VscThreeBars />
        </div>
    </>
}

export default Navigation;
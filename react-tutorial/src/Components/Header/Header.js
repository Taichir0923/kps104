import Navigation from "./Navigation";

const Header = () => {
    return <header className="w-full flex justify-between items-center bg-red-400 text-white">
        <div className="pl-4">
            <h1 className="text-3xl font-bold">Logo</h1>
        </div>
        <Navigation />
    </header>
}


export default Header
const Card = props => {
    return <div className="h-64 rounded-xl border-4 border-red-400 relative overflow-hidden">
        <img alt="box" className="w-full h-full object-cover" src={props.img} />
        <div className="absolute top-0 left-0 bg-black bg-opacity-30 text-white h-full w-full flex justify-center items-center">
            <h1 className="text-3xl">{props.title}</h1>
        </div>
    </div>
}

export default Card
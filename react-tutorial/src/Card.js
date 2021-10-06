const Card = props => {
    return <div className='w-1/5 text-center flex flex-col justify-center items-center'>
        <div className='w-24 rounded-full h-24 bg-black'>
            <img src={props.icon} alt='img' />
        </div>

        {props.children}

        <h1 className='font-bold mt-5 mb-2'>{props.title}</h1>
        <p className='text-gray-600 text-xs'>{props.text}</p>
    </div>
}

export default Card;
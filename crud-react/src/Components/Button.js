const Button = props => {
    return <button onClick={props.click} className={props.type === 'normal' ? `rounded-md bg-${props.bg}-400 text-${props.bg}-400 border-2 border-${props.bg}-400 py-3 px-6 hover:bg-opacity-100 hover:text-white transition duration-300 bg-opacity-30` : `rounded-full flex items-center justify-center w-8 h-8 bg-${props.bg}-400 text-${props.bg}-400 border-2 border-${props.bg}-400 hover:bg-opacity-100 transition duration-300 bg-opacity-30 ${props.bg === 'white' ? 'bg-white text-gray-600 border-white text-2xl' : 'hover:text-white'}`}>
        {props.val}
    </button>
}

export default Button;
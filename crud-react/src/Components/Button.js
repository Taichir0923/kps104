const Button = props => {
    return <button onClick={props.click} className={`rounded-md bg-${props.bg}-400 text-white py-3 px-6`}>
        {props.val}
    </button>
}

export default Button;
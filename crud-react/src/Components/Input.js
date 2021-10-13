const Input = props => {
    return <input id={props.id} className="py-3 px-6 bg-gray-100 rounded-md border mb-4" onChange={props.onChange} placeholder={props.placeholder} type={props.type} value={props.value} />
}

export default Input
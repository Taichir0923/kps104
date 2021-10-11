const Label = props => {
    return <label htmlFor={props.htmlFor} className="font-bold">
        {props.lab}
    </label>
}

export default Label
const Form = props => {
    return <>
     <form className='flex w-full flex-col' onSubmit={props.submitHandler}>
        {
            props.children
        }
    </form>
    </>
}

export default Form;
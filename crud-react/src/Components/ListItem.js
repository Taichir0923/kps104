const ListItem = props => {
    return <li className='py-2 px-4 rounded-xl hover:bg-gray-100 flex items-center justify-between cursor-pointer'>
        <h1>
            {props.list}
        </h1>
        <div className='flex gap-3'>
            {
                props.children
            }
        </div>
    </li>
}

export default ListItem
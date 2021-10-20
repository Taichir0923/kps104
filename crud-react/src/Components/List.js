import ListItem from "./ListItem";
import Button from "./Button";
import {MdEdit} from 'react-icons/md';
import {RiDeleteBin5Line} from 'react-icons/ri';
const List = props => {
    return <ul>
        {
            props.datas.map(data => (
                <ListItem userId={data._id} key={`list-${data._id}`} list={data.username}>
                    <Button val={<MdEdit />} bg='gray' click={() => props.editHandler(data._id)} />
                    <Button val={<RiDeleteBin5Line />} bg='red' click={() => props.deleteHandler(data._id)} />
                </ListItem>
            ))
        }
    </ul>
}

export default List;
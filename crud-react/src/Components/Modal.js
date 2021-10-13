import Button from "./Button";
import {FaTimes} from 'react-icons/fa'
const Modal = props => {
    return <div style={{width: '600px'}} className='rounded-xl h-96 bg-white flex flex-col justify-between'>
        <div className='w-full border-b border-gray-300 flex justify-between items-center py-3 px-6'>
            <h1 className='text-2xl font-bold'>{props.title}</h1>
            <Button click={props.onClick} bg='white' val={<FaTimes />} />
        </div>
        <div className='flex-grow w-full py-3 px-6'>
            {props.message}
        </div>
        <div className='py-3 px-6 border-t border-gray-300 flex justify-end'>
            <Button bg='green' type='normal' val="OK" click={props.onClick} />
        </div>
    </div>
}

export default Modal;
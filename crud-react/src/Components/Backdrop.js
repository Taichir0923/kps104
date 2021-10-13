import Modal from "./Modal";
const Backdrop = props => {
    return <div className='fixed w-full h-screen bg-black flex justify-center items-center bg-opacity-30 top-0 left-0'>
        <Modal title={props.title} message={props.message} onClick={props.onClick} />
    </div>
}

export default Backdrop;
import { useSelector , useDispatch } from 'react-redux';
import {getUsers} from './ACTION/userActions';
import {ImSpinner3} from 'react-icons/im';
import swal from 'sweetalert';

function App() {
  const dispatch = useDispatch();
  const usrs = useSelector(state => state.userReducers);
  const { users , loading , error } = usrs;
  const getData = () =>{
    dispatch(getUsers());
  }
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <div>
        {
          error && <p>{error}</p>
        }
        { 
          loading && <div className="animate-sping">
            <ImSpinner3 />
          </div>
        }
        {
          users && users.map(user => {
            return <p>{user.name}</p>
          })
        }
      </div>
      <button onClick={getData}>press</button>
    </div>
  );
}

export default App;

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Error = () => {
    toast.info('test');

    return < ToastContainer position='top-right' autoClose={2000} />;

};

export default Error;
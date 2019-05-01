import axios from 'axios';

export default { 
    getNextMove (board) {
        return axios.post('/.netlify/functions/hello', { board: board });
    }
}
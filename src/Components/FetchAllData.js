import axios from 'axios';

export default function FetchAllData()  {
    axios
    .get('http://localhost:5000/api/animals')
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}
 


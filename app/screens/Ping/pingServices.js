import axios from 'axios';

const BASE_URL = 'http://localhost:8080/fileForPing';

export {ping};

function ping() {
  return axios.get(BASE_URL);
}

import axios from 'axios';

const GET_DETAILS = 'GET_DETAILS';

const baseUrl = 'https://www.dnd5eapi.co';

const getDetails = (url) => async (dispatch) => {
  axios.get(`${baseUrl + ([...url][0] === '/' ? '' : '/') + url}`).then((res) => dispatch({ type: GET_DETAILS, data: res.data }));
};

const details = (state = {}, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return action.data;
    default: return state;
  }
};

export default details;
export { getDetails };

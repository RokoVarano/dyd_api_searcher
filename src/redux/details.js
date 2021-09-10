import axios from 'axios';

const GET_DETAILS = 'GET_DETAILS';

const baseUrl = 'https://www.dnd5eapi.co';

const sendDetails = (data) => ({
  type: GET_DETAILS,
  data,
});

const details = (state = {}, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return action.data;
    default: return state;
  }
};

const getDetails = (url) => async (dispatch) => {
  axios.get(`${baseUrl + ([...url][0] === '/' ? '' : '/') + url}`).then((res) => dispatch(sendDetails(res.data)));
};

export default details;
export { getDetails, sendDetails };

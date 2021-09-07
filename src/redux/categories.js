import axios from 'axios';

const ALL = 'ALL';

const baseUrl = 'https://www.dnd5eapi.co';

const getCategories = () => async (dispatch) => {
  const waitForIt = await axios.get(`${baseUrl}/api/`).then((response) => response.data).then((data) => Object.entries(data).map((pair) => axios.get(`${baseUrl}${pair[1]}`).then((obj) => ({ key: pair[0], category: obj.data }))));
  Promise.all(waitForIt).then((categories) => dispatch({ type: ALL, categories }));
};

const categories = (state = [], action) => {
  switch (action.type) {
    case ALL:
      return action.categories;
    default: return state;
  }
};

export default categories;
export { getCategories };

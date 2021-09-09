import axios from 'axios';

const ALL = 'ALL';
const FILTER_CAT = 'FILTER_CAT';

const baseUrl = 'https://www.dnd5eapi.co';

const getCategories = (filter) => async (dispatch) => {
  const waitForIt = await axios.get(`${baseUrl}/api/`)
    .then((response) => response.data)
    .then((data) => Object.entries(data)
      .filter((pair) => (filter ? pair[0].includes(filter) : true))
      .map((pair) => axios.get(`${baseUrl}${pair[1]}`)
        .then((obj) => ({ key: pair[0], category: obj.data }))));
  Promise.all(waitForIt).then((categories) => dispatch({ type: ALL, categories }));
};

const filterCategories = (filter) => ({
  type: FILTER_CAT,
  filter,
});

const categories = (state = [], action) => {
  switch (action.type) {
    case ALL:
      return action.categories;
    case FILTER_CAT:
      return state.filter((category) => category.key.includes(action.filter));
    default: return state;
  }
};

export default categories;
export { getCategories, filterCategories };

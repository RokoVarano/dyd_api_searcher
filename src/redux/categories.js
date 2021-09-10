import axios from 'axios';

const ALL = 'ALL';

const baseUrl = 'https://www.dnd5eapi.co';

const sendCategories = (categories) => ({
  type: ALL,
  categories,
});

const categories = (state = [], action) => {
  switch (action.type) {
    case ALL:
      return action.categories;
    default: return state;
  }
};

const getCategories = (filter) => async (dispatch) => {
  const waitForIt = await axios.get(`${baseUrl}/api/`)
    .then((response) => response.data)
    .then((data) => Object.entries(data)
      .filter((pair) => (filter ? pair[0].includes(filter) : true))
      .map((pair) => axios.get(`${baseUrl}${pair[1]}`)
        .then((obj) => ({ key: pair[0], category: obj.data }))));
  Promise.all(waitForIt).then((categories) => dispatch(sendCategories(categories)));
};

export default categories;
export { getCategories, sendCategories };

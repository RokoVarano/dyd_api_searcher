import mockGetCategories, { dragon } from '../fakeDB/fakeDB';
import { sendCategories } from './categories';
import { sendDetails } from './details';

test('sendCategories', () => {
  const action = sendCategories(mockGetCategories);

  expect(action.type).toEqual('ALL');
  expect(action.categories).toBe(mockGetCategories);
});

test('sendDetails', () => {
  const action = sendDetails(dragon);

  expect(action.type).toEqual('GET_DETAILS');
  expect(action.data).toBe(dragon);
});

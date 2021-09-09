import React from 'react';
import { Route, Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import List from './List';
import categories from '../../redux/categories';
import main from '../../fakeDB/fakeDB';
import capFirst from '../../utilities';

afterEach(cleanup);

const renderWithRedux = (component,
  { initialState, store = createStore(categories, initialState) } = {}) => ({
  ...render(<Provider store={store}><Router history={createMemoryHistory()}><Route exact path="/" component={() => (component)} /></Router></Provider>),
});

const mockGetCategories = (filter) => Object.entries(main)
  .filter((pair) => (filter ? pair[0].includes(filter) : true))
  .map((pair) => ({ key: pair[0] }));

it('renders with redux', () => {
  const { getByTestId } = renderWithRedux(<List mainList categories={[]} />);
  expect(getByTestId('list').textContent.length).toBe(0);
});

it('renders all categories', () => {
  const { getByTestId } = renderWithRedux(
    <List mainList categories={mockGetCategories()} />,
  );
  expect(getByTestId('list').childNodes.length).toBe(mockGetCategories().length);
});

it('renders each category name', () => {
  const { getByTestId } = renderWithRedux(
    <List mainList categories={mockGetCategories()} />,
  );
  getByTestId('list').childNodes.forEach((node, index) => expect(node).toHaveTextContent(capFirst(mockGetCategories()[index].key)));
});

// Credits: https://www.youtube.com/watch?v=vbvQzWDCuXU

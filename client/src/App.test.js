/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import App from './App';

describe('App component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});

it('adds correctly', () => {
  expect(1 + 1).toEqual(2);
});

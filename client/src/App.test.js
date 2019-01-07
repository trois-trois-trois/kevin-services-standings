/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import App from './App';
import Standings from './components/Standings';

describe('App component', () => {
  it('Should render App component correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should update a state in a callback', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ scores: 'new' }, () => {
      expect(wrapper.state()).toEqual({ scores: 'new', teams: [], view: 'main' });
    });
  });

  test('Should render a small label', () => {
    const wrapper = shallow(
      <App small>This is a test!</App>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call componentDidMount once', () => {
    const spy = jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('Should update state view when handleClick() is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleClick();
    expect(wrapper.state()).toEqual({ teams: [], view: 'fullstandings' });
  });
});

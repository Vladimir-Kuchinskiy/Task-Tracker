import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddBoard from './AddBoard';
import NewBoardForm from './NewBoardForm';
import AddBoardButton from './AddBoardButton';

configure({ adapter: new Adapter() });

describe('<AddBoard />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddBoard />);
  });

  describe('when state.showNew is true', () => {
    beforeEach(() => {
      wrapper.setState({ showNew: true });
    });

    it('should render 1 NewBoardForm', () => {
      expect(wrapper.find(NewBoardForm)).toHaveLength(1);
      expect(wrapper.contains(<NewBoardForm onClose={wrapper.instance().toggleShowNew} />)).toBe(
        true
      );
    });

    it('does not render AddBoardButton', () => {
      expect(
        wrapper.contains(<AddBoardButton toggleShowNew={wrapper.instance().toggleShowNew} />)
      ).toBeFalsy();
    });
  });

  describe('when state.showNew in false', () => {
    beforeEach(() => {
      wrapper.setState({ showNew: false });
    });

    it('should render 1 AddBoardButton', () => {
      expect(wrapper.find(AddBoardButton)).toHaveLength(1);
      expect(
        wrapper.contains(<AddBoardButton toggleShowNew={wrapper.instance().toggleShowNew} />)
      ).toBe(true);
    });

    it('does not render NewBoardForm', () => {
      expect(
        wrapper.contains(<NewBoardForm onClose={wrapper.instance().toggleShowNew} />)
      ).toBeFalsy();
    });
  });
});

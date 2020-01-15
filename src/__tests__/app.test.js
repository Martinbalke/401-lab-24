import React from 'react';
import { configure, render, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import DropDown from '../components/dropdown';


configure({ adapter: new Adapter() });

describe('dropdown testing', () => {
  let values = ['one', 'two'];
  const wrapper = render(<DropDown values={values} className='dropdown'/>); // mount/render/shallow when applicable
  it('displays correct values ', () => {
    expect(wrapper.find('option')).toHaveLength(2);
  })
});

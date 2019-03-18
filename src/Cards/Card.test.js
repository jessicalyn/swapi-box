import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme'

const mockCard = {
  name: "Naboo", 
  terrain: "grassy hills, swamps, forests, mountains", 
  population: "4500000000", 
  climate: "temperate", 
  residents: ["R2-D2", "Palpatine"]
}

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card key={ mockCard.name } card={ mockCard }/>);
  });

  it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
  });
})

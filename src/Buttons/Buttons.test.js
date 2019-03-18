import React from 'react'
import { shallow } from 'enzyme'
import Buttons from './Buttons'

const showButtonCategorymock = jest.fn()

describe('Buttons', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Buttons showButtonCategory={ showButtonCategorymock }/>)
    });

    it('should match a snapshot with all data passed in', () => {
        expect(wrapper).toMatchSnapshot()
    });

    it('should have proper default states', () => {
        expect(wrapper.state()).toEqual({
          "people": false,
          "planets": false,
          "vehicles": false,
          "favorites": false
        })
    });

    it.skip('should change state when select button is invoked', () => {
        const mockName = "people"

        expect(wrapper.state("people")).toEqual( false )
        wrapper.instance().selectButton(mockName)
        expect(wrapper.state("people")).toEqual( true )
        wrapper.instance().showButtonCategorymock(mockName)
    });
})
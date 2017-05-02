import React from 'react';
import {shallow} from 'enzyme';

import Info from './info-modal';

it('renders without crashing', () => {
	shallow(<Info />);
});

it('Fires the onClose callback when the close button is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<Info onClose={callback} />);
        wrapper.find('.close').simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });
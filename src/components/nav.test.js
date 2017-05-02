import React from 'react';
import {shallow} from 'enzyme';

import Nav from './top-nav';

it('renders without crashing', () => {
	shallow(<Nav />);
});

it('Should call onNewGame when new game is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<Nav onNewGame={callback} />);
        const link = wrapper.find('.new');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });

    it('Should call onInfo when info is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<Nav onInfo={callback} />);
        const link = wrapper.find('.what');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });
import React from 'react';
import { render } from '@testing-library/react';
import DetailView from '../DetailView';

test('render DetailView', () => {
    const { container } = render(<DetailView />);
    expect(container).toMatchSnapshot();

    //const linkElement = screen.getByText(/learn react/i);
    //expect(linkElement).toBeInTheDocument();
});

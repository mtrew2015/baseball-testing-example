import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard.js';
import '@testing-library/jest-dom/extend-expect'

it('renders without crashing', () => {
    render(<Dashboard />)
})

describe('It Records a Strikeout When There Is Three Strikes', () => {
    test('resets to zero strikes after it reaches 3,', () => {
        const component = render(<Dashboard />);
        const strikeDisplay = component.getByTestId('strikes')
        const strike = component.getByText('Strike');
        fireEvent.click(strike);
        fireEvent.click(strike);
        fireEvent.click(strike);
        expect(strikeDisplay).toHaveTextContent('0')
    })
})

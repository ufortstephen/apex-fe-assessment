import React from 'react';
import {  render as trlRender, screen, cleanup } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { JSX } from 'react/jsx-runtime';
import {  store } from "../app/store";

const render = (component: string | number | boolean | JSX.Element | Iterable<React.ReactNode> | null | undefined) => trlRender(
    <Provider store={store}>
        {component}
    </Provider>
)


describe('renders app', () => {
    it('Renders App Component', () => {
        render(<App />)
    });
});

import ARActivation from '../components/ReusableComponents/Buttons/ARActivation';
import LoadingBars from '../components/ReusableComponents/Loading/LoadingBars';
import LoadingSpinner from '../components/ReusableComponents/Loading/LoadingSpinner';
import React from 'react';
import { ThemeContext } from '../utilities/context/ThemeContext';
import ToggleDarkModeButton from '../components/ReusableComponents/Buttons/ToggleDarkMode';
import { buttonMock } from '../__mocks__/dataMock';
import renderer from 'react-test-renderer';

it('renders AR Button unchanged', () => {
  const tree = renderer.create(<ARActivation />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Loading Bars unchanged', () => {
  const tree = renderer.create(<LoadingBars />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Loading Spinner unchanged', () => {
  const tree = renderer.create(<LoadingSpinner />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Toggle Dark Mode Button unchanged', () => {
  const tree = renderer
    .create(
      <ThemeContext.Provider value={{ darkMode: false, toggleDarkMode: buttonMock }}>
        <ToggleDarkModeButton />
      </ThemeContext.Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />)

  //find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  expect(colorButton).toHaveStyle({backgroundColor: 'red'})

  //click
  fireEvent.click(colorButton)

  //expect the background color to be blue
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red')
});

test('initial conditions', () => {
  render(<App />);

  //Check that the button starts enabled
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})
  expect(colorButton).toBeEnabled()

  //Check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()

})

test('Test checkbox events to enable / disable blutton', () => {
  render(<App />)
  
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'})
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})
  
  //Expect that the checkbox be checked after click the color button be disabled
  fireEvent.click(checkbox)
  expect(checkbox).toBeChecked()
  expect(colorButton).toBeDisabled()

  //Expect that the checkbox be unchecked after click and the color button be enabled
  fireEvent.click(checkbox)
  expect(checkbox).not.toBeChecked()
  expect(colorButton).toBeEnabled()

})

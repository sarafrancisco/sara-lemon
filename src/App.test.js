import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './Components/BookingForm';
import { BrowserRouter } from 'react-router-dom';

test('renders the BookingForm heading', () => {
  render(<BrowserRouter><BookingForm /></BrowserRouter>);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();

  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const headingElementNew = screen.getByText("Choose Date:");
  expect(headingElementNew).toBeInTheDocument();
});

test('Initialize/Update Times', () => {
  render(<BrowserRouter><BookingForm /></BrowserRouter>);
  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

    const testTime = []
    // userEvent.selectOptions(screen.getByLabelText("time"),screen.getByRole('option', { name: testTime}))
    // expect(screen.getByRole('option', { name: testTime}).selected).toBe(true);

})
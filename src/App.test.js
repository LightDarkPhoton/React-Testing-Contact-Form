import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";
import { act } from 'react-dom/test-utils';


test("renders App without crashing", () => {
  render(<App />);
});

test('Typing in the input fields', async () => {
  
  
  render(<ContactForm />);

  // Querying the virtual DOM
  const firstNameInputField = screen.getByPlaceholderText("Edd")
  const lastNameInputField = screen.getByPlaceholderText("Burke")
  const emailInputField = screen.getByTestId("email")
  const messageField = screen.getByTestId("message")
  
  // Filling out form
  fireEvent.change(firstNameInputField, {target: {value: "Andrew"}});
  fireEvent.change(lastNameInputField, {target: {value: "Ruiz"}})
  fireEvent.change(emailInputField, {target: {value: "andrewruiz@gmail.com"}})
  fireEvent.change(messageField,{target: {value: "Hello world"}})

  // Sanity Check
  expect(firstNameInputField).toHaveValue('Andrew');
  expect(lastNameInputField).toHaveValue("Ruiz")
  expect(emailInputField).toHaveValue("andrewruiz@gmail.com")
  expect(messageField).toHaveValue("Hello world")

  
  // From bug error fix: https://reactjs.org/blog/2019/08/08/react-v16.9.0.html
await act(async () => {
  const submitButton = screen.getByTestId("submitButton")
  fireEvent.click(submitButton)
  
});


})
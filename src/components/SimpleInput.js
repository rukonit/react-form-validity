import { useState, useEffect } from "react";
import useInput from '../hooks/use-input'

const SimpleInput = (props) => {

  const {
    value: enteredValue, 
    isValid: enteredNameIsValid,
    hasError: nameInputError, 
    valueChangedHandler: nameChangedHandler, 
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '')



  let formIsValid = false
  
  if(enteredNameIsValid) {
    formIsValid = true
  }
    


  const formSubmitHandler = (event) => {
    event.preventDefault()


    if(!enteredNameIsValid) {
       return
    }


    console.log(enteredValue);
    formIsValid = false
    resetNameInput()
  }

     


  const nameInputClasses = nameInputError ? 'form-control invalid': 'form-control'

  return (
    <form  onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
            onChange={nameChangedHandler}   
            onBlur={nameBlurHandler}
            type='text' 
            id='name' 
            value={enteredValue}
        />
        {nameInputError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)


  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputValid = !enteredNameIsValid && enteredNameTouched

  let formIsValid = false
  
  if(enteredNameIsValid) {
    formIsValid = true
  }
    

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value)
    
   }

  const formSubmitHandler = (event) => {
    event.preventDefault()


    if(!enteredNameIsValid) {
       return
    }


    console.log(enteredName);
    setEnteredName('')
    formIsValid = false
    setEnteredNameTouched(false)
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true)

     }


  const nameInputClasses = nameInputValid ? 'form-control invalid': 'form-control'

  return (
    <form  onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
            onChange={enteredNameHandler}   
            onBlur={nameInputBlurHandler}
            type='text' 
            id='name' 
            value={enteredName}
        />
        {nameInputValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

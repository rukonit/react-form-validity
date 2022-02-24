import useInput from "../hooks/use-input";



const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangedHandler: nameChangedHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameReset
} = useInput(name => name.trim() !== '')

const {
  value: enteredLastName,
  isValid: lastNameIsValid,
  hasError: lastNameHasError,
  valueChangedHandler: lastNameChangedHandler,
  inputBlurHandler: lastNameInputBlurHandler,
  reset: lastNameReset
} = useInput(name => name.trim() !== '')

const {
  value: enteredEmail,
  isValid: emailIsValid,
  hasError: emailHasError,
  valueChangedHandler: emailChangedHandler,
  inputBlurHandler: emailInputBlurHandler,
  reset: emailReset
} = useInput(name => name.trim().includes('@'))

  let formIsValid = false;

  if (nameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true
  }
  const submitHandler = (event) => {
    event.preventDefault()

    if(nameHasError && lastNameHasError) {
      return; 
    }

    console.log("name: " + enteredName + " latname: " + enteredLastName+ " email: " + enteredEmail);
    nameReset()
    lastNameReset()
    emailReset()
    formIsValid = false
  }

  const nameInputClass = !nameHasError ? 'form-control' : 'form-control invalid'

  const lastNameInputClass = !lastNameHasError ? 'form-control' : 'form-control invalid'

  const emailInputClass = !emailHasError ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={nameInputClass}>
          <label htmlFor='name'>First Name</label>
          <input onChange={nameChangedHandler} onBlur={nameInputBlurHandler} type='text' id='name' value={enteredName} />
          {nameHasError && <p className="error-text">Please enter a valid name</p>}
        </div>
        <div className={lastNameInputClass}>
          <label htmlFor='name'>Last Name</label>
          <input onChange={lastNameChangedHandler} onBlur={lastNameInputBlurHandler} type='text' id='name' value={enteredLastName}/>
          {lastNameHasError && <p className="error-text">Please enter a valid last name</p>}
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input onChange={emailChangedHandler} onBlur={emailInputBlurHandler} type='text' id='name' value={enteredEmail} />
        {emailHasError && <p className="error-text">Please enter a valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

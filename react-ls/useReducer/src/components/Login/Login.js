import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import Input from "../UI/Input/Input";
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from "../../store/auth-context";
import authContext from "../../store/auth-context";

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.payload, isValid: action.payload.includes('@')
    };
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value, isValid: state.value.includes('@')
    };
  }
  return state;
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.payload,
      isValid: action.payload.trim().length > 6
    };
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: state,
      isValid: state.value.trim().length > 6
    }
  }

  return state;
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const context = useContext(AuthContext);

  const [ emailState, dispatchEmail ] = useReducer(emailReducer, {
      value: '',
      isValid: false }
  );

  const [ passwordState, dispatchPassword ] = useReducer(passwordReducer, {
    value: "",
    isValid: false
  });

  const { isValid: passwordIsValid } = passwordState;
  const { isValid: emailIsValid } = emailState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: 'USER_INPUT', payload: event.target.value
    });

    setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid    //value.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({
      type: 'USER_INPUT', payload: event.target.value
    });

    setFormIsValid(
      emailState.value.includes('@') && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({
      type: 'INPUT_BLUR'
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authContext.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {

    } else {

    }
    context.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>

          <Input
              id="email"
              label="email"
              type="email"
              isValid={emailIsValid}
              value={emailState.value}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
          />

        <Input
            id="password"
            label="password"
            type="password"
            isValid={passwordIsValid}
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

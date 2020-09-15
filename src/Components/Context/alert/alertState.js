import AlertContext from '../alert/alertContext'
import AlertReducer from '../alert/alertReducer'
import React, {useReducer} from 'react'
import {SET_ALERT, REMOVE_ALERT} from '../types'

const AlertState = props =>
{
    const setAlert = (msg , type) => {
        console.log(msg);
        console.log(type);
        dispatch({
            type : SET_ALERT,
            payload : {msg, type}
        })
        setTimeout(() => {
         dispatch({type: REMOVE_ALERT})
        }, 5000);
      }

    const initialState = null;

    const[state, dispatch] = useReducer(AlertReducer, initialState);

    return (<AlertContext.Provider
    value={
        {
            alert: state,
            setAlert
        }
    }>
        {props.children}
    </AlertContext.Provider>);
};

export default AlertState
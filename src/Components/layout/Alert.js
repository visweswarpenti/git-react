import React, {useContext} from 'react'
import AlertContext from '../Context/alert/alertContext'

const Alert = () =>
{
    const alertContext = useContext(AlertContext);  
    console.log(alertContext);  
    const {alert } = alertContext;

    return(
        alert!== null && (
        <div className={`alert alert-${alert.type}`}>
            <i className='fas fa-info-circle' ></i> {alert.msg}
        </div>)
    )
}

export default Alert
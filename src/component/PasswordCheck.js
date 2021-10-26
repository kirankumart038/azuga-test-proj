import React, { useState } from 'react';

function PasswordCheck() {

    const [password, setPassword] = useState( '' );
    const [validationMess, setValidationMess] = useState( '' );
    const handlePasswordChange = ( e ) => {
        setPassword( e.target.value )
        validatePassword( e.target.value )
    }
    const validatePassword = ( pass ) => {
        //let passReg = new RegExp(/.[A-Z]+.[a-z]+.[0-9]+.[!@#$%^&*()-+]+/);
        let valMessage = "";
        if ( pass.length < 6 ) {
            valMessage += `Enter ${ 6 - pass.length } Characters to make Strong`;
        } else {
            valMessage = "Password is Strong"
        }
        if ( valMessage !== '' ) {
            setValidationMess( valMessage )
        } else {
            setValidationMess( '' )

        }

    }
    return (
        <div>
            <h2>Enter Password to check Strength</h2>
            <label htmlFor="password">Password Check : </label>
            <input type="password" value={ password } onChange={ handlePasswordChange } />
            <div>
                {
                    <h4>{ validationMess }</h4>
                }
            </div>
        </div>

    )
}

export default PasswordCheck;
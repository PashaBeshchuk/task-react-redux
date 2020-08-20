import React from 'react';

export const inputForm = ({ input, meta: {touched, error, warning}, ...props }) => {
    return <>
        <input className="form-control" {...input}/>
        { touched &&
            ((error && <span style={{color:"red"}}>{error}</span>))

        }
    </>
}
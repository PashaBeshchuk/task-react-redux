import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { requiredField } from './usersForm.validate';
import { inputForm } from './FormsElements';
const Form = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label htmlFor="name">Name</label>
                    <Field name="name" type="text" component={inputForm}  id="name" placeholder="Name" validate={[requiredField]}/>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="surname">Surname</label>
                    <Field name="surname" type="text" component={inputForm} className="form-control" id="surname" placeholder="Surname" validate={[requiredField]}/>
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="description">Description</label>
                    <Field name="desc" type="text" component={inputForm} className="form-control" id="description" placeholder="Description" validate={[requiredField]}/>
                </div>
            </div>
            <button className="btn btn-primary" type="submit">Submit form</button>
        </form>
}

 
export default reduxForm({form:"createNewUser"})(Form);
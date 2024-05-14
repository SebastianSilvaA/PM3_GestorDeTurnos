import "formik"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { validate } from "./Validate"
import { postUserRegister } from "../../helpers/getAppointments"

export default function Register() {
    function handleSubmit({name, email, birthdate, dni_number, username, password}) {
        const user = {name, email, birthdate, dni_number, username, password}

        postUserRegister(user).then(res => console.log(res)).catch(err => console.log(err))

    }
    return (
        <div>
            <h1>Register</h1>
            <Formik
            initialValues={{
                name: "",
                email: "",
                birthdate: "",
                dni_number: "",
                username: "",
                password:"",
                repeatPassword: ""
            }}
            validate={validate}
            onSubmit={handleSubmit}
            > 
            {() => (
                <Form >
                    <label htmlFor="name">Name</label>
                    <Field name= "name" type="text"/>
                    <ErrorMessage name="name"
                    component="div"
                    />


                    <label htmlFor="email">Email</label>
                    <Field name= "email" type="email"/>
                    <ErrorMessage name="email"
                    component="div"
                    />

                    <label htmlFor="birthdate">Birthdate</label>
                    <Field name= "birthdate" type="date"/>
                    <ErrorMessage name="birthdate"
                    component="div"
                    />

                    <label htmlFor="dni_number">dni</label>
                    <Field name= "dni_number"/>
                    <ErrorMessage name="dni_number"
                    component="div"
                    />

                    <label htmlFor="username">username</label>
                    <Field name= "username"/>
                    <ErrorMessage name="username"
                    component="div"
                    />

                    <label htmlFor="password">password</label>
                    <Field name= "password"/>
                    <ErrorMessage name="password"
                    component="div"
                    />

                    <label htmlFor="repearPassword">Repeat password</label>
                    <Field name= "repeatPassword"/>
                    <ErrorMessage name="repeatPassword"
                    component="div"
                    />
                    <button type="submit">Submit</button>

                </Form>
            )}
            
            </Formik>
        </div>
    )
}


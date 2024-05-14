import { ErrorMessage, Field, Form, Formik } from "formik"
import { LoginSchema } from "./validate"
import { postUserLogin } from "../../helpers/getAppointments"

function Login() {

    function handleSubmit({username, password}) {
       postUserLogin({username, password}).then(res => console.log(res)).catch(err => console.log(err))
    }
    return (
       

        <div>
            <h1>Login</h1>
            <Formik initialValues={{
                username: "",
                password: "",
                repeatPasswod: ""
            }} validationSchema={LoginSchema} onSubmit={handleSubmit}>
                {() => (
                    <Form>
                        <label htmlFor="username">Username</label>
                        <Field name= "username" type="text"/>
                        <ErrorMessage name="username" component="div" />

                        <label htmlFor="password">Password</label>
                        <Field name= "password" type="text"/>
                        <ErrorMessage name="password" component="div" />

                        <label htmlFor="repeatPassword">Repeat password</label>
                        <Field name= "repeatPassword" type="text"/>
                        <ErrorMessage name="repeatPassword" component="div" />

                        <button type="submit">Submit</button>
                    </Form>
                )}


            </Formik>
        </div>
    )
}

export default Login
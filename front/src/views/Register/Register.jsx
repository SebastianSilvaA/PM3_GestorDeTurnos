import { ErrorMessage, Field, Form, Formik } from "formik";
import { validate } from "./Validate";
import { postUserRegister } from "../../helpers/getAppointments";
import "./register.css"; // Importa el archivo CSS para los estilos del formulario

export default function Register() {
    function handleSubmit({name, email, birthdate, dni_number, username, password}, {resetForm}) {
        const user = {name, email, birthdate, dni_number, username, password};
        postUserRegister(user).then((res) =>{
            alert("usuario creado!")
            console.log(res)
            resetForm();
        } ).catch(err => console.log(err));
    }

    return (
        <div className="register-container"> 
            <h1>Register</h1>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    birthdate: "",
                    dni_number: "",
                    username: "",
                    password: "",
                    repeatPassword: ""
                }}
                validate={validate}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <Field name="name" type="text" />
                            <ErrorMessage name="name" component="div" className="error-message" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" />
                            <ErrorMessage name="email" component="div" className="error-message" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="birthdate">Birthdate</label>
                            <Field name="birthdate" type="date" />
                            <ErrorMessage name="birthdate" component="div" className="error-message" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dni_number">DNI</label>
                            <Field name="dni_number" type="text" />
                            <ErrorMessage name="dni_number" component="div" className="error-message" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <Field name="username" type="text" />
                            <ErrorMessage name="username" component="div" className="error-message" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" />
                            <ErrorMessage name="password" component="div" className="error-message" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="repeatPassword">Repeat password</label>
                            <Field name="repeatPassword" type="password" />
                            <ErrorMessage name="repeatPassword" component="div" className="error-message" />
                        </div>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}


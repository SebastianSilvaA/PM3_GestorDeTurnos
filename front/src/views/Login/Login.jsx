import { ErrorMessage, Field, Form, Formik } from "formik";
import { LoginSchema } from "./validate";
import { postUserLogin } from "../../helpers/getAppointments";
import { useDispatch } from "react-redux";
import { setUserId, updateAppointment } from "../../redux/Slice";
import { Navigate, useNavigate } from "react-router-dom";
import "./login.css"; 

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSubmit({username, password}) {
        postUserLogin({username, password}).then(res => {
            alert(res.data.message);
            console.log(res);
            dispatch(setUserId(res.data.user.id));
            dispatch(updateAppointment(res.data.user.appointments));
            navigate("/");
        }).catch(err => console.log(err));
    }

    return (
        <div className="login-container"> 
            <h1>Login</h1>
            <Formik initialValues={{
                username: "",
                password: "",
                repeatPassword: "" 
            }} validationSchema={LoginSchema} onSubmit={handleSubmit}>
                {() => (
                    <Form>
                        <div className="form-group"> 
                            <label htmlFor="username">Username</label>
                            <Field name="username" type="text" />
                            <ErrorMessage name="username" component="div" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" /> 
                            <ErrorMessage name="password" component="div" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="repeatPassword">Repeat password</label>
                            <Field name="repeatPassword" type="password" /> 
                            <ErrorMessage name="repeatPassword" component="div" />
                        </div>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Login;
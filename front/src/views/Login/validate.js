import * as Yup from "yup"

const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().min(2,"it too short").max(20, "it too long").required("Required"),
    repeatPassword: Yup.string().oneOf([Yup.ref("password"),null],"Password mut match").required("Required")
})

export {LoginSchema}
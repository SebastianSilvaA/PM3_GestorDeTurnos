 function validate (values) {
    const errors = {}
    if(!values.name) {
        errors.name = "Required"
    }
    if (!values.email) {
        errors.email = "Required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalidad email address"
    }
    if(!values.birthdate) {
        errors.birthdate = "required"
    }
    if(new Date(values.birthdate) > new Date()) {
        errors.birthdate = "Birthdate must be before current date"
    }
    if (!values.dni_number){ 
        errors.dni_number = "Required"
    }
        if (!values.username) {
            errors.username = "Required"
        }
        if(!values.password) {
            errors.password = "Required"
        }
        if (values.password !== values.repeatPassword) {
            errors.repeatPassword = "Passwords must match"
        }
        return errors
    }


export {validate}
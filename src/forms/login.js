import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState("john@mail.com")
    const [password, setPassword] = useState("password");
    const [invalidEmail, setInvalidEmail] = useState(false);

    const handleEmailChange = (event) => {
        let value = event.target.value
        if (value.match(/\d/)) {
            event.preventDefault();
            setInvalidEmail(true)
        } else {
            setInvalidEmail(false)
            setEmail(value)
        }

    }

    const handlePasswordChange = (event) => {
        let value = event.target.value
        setPassword(value)
    }

    const handleLogin = (event) => {
        event.preventDefault()
        console.log(`logging in with ${email} and ${password}`)
    }

    return (
        <form className="col-6 mx-auto" onSubmit={handleLogin}>
            <h1>Login</h1>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input value={email} onChange={handleEmailChange} type="email" className={`form-control ${ invalidEmail ? 'is-invalid' : ' '}`} id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="validationServer03Feedback" className="invalid-feedback">
                    Input field does not allow digits
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input onChange={handlePasswordChange} value={password} type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
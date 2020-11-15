import { useState } from "react"

export default function LoginForm() {
    const [email, setEmail] = useState("john@mail.com");
    const [password, setPassword] = useState("password");
    const [invalidEmail, setInvalidEmail] = useState(false);

    const handleEmailChange = (event) => {
        let value = event.target.value
        if (value.match(/\d/)) {
            event.preventDefault()
            setInvalidEmail(true)
        } else {
            setInvalidEmail(false)
            setEmail(event.target.value)
        }
    }

    const handleLogin = (event) => {
        event.preventDefault();
        console.log(`logging in with ${email} & ${password}`)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    return (
        <form className="col-6" onSubmit={handleLogin}>
            <h2>Log in</h2>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className={`form-control ${invalidEmail ? 'is-invalid' : ""}`} id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={handleEmailChange} />
                <div style={{ 'display': `${invalidEmail} ? 'block': 'none` }} id="validationServer04Feedback" className="invalid-feedback">
                    Input field does not allow digits
                    </div>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={handlePasswordChange} />
            </div>
            <button type="submit" className="btn btn-primary">Log in</button>
        </form>
    )
}
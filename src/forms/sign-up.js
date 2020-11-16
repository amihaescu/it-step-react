import React from 'react'

export default function SignUpForm() {

    let email = React.createRef()
    let password = React.createRef()
    let optIn = React.createRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(`Signed up with ${email.current.value} and ${password.current.value}. User wans to receive updates: ${optIn.current.checked}`)
    }
    return (
        <form className="col-6 mx-auto" onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={email} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" ref={password} />
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" ref={optIn}/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
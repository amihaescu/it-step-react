export default function SignUpForm() {

    const handleSubmit = (event) => {
        event.preventDefault()
        let email = document.getElementById('exampleInputEmail1').value
        let password = document.getElementById('exampleInputPassword1').value
        let optIn = document.getElementById('exampleCheck1').checked

        console.log(`Signed up with ${email} and ${password}. User wants to recieved updates: ${optIn}`);
    }
    return (
        <form onSubmit={handleSubmit} className="col-6">
            <h2>Sign up</h2>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Subscribe to promotional updates</label>
            </div>
            <button type="submit" className="btn btn-primary">Sign up</button>
        </form>
    )
}
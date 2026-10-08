import { Link } from "react-router-dom";

function Register() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <p className="small-heading">START YOUR COLLECTION</p>

        <h1>Create your MovieShelf</h1>

        <p className="auth-description">
          Create an account and start building your personal movie collection.
        </p>

        <form>
          <label>Name</label>

          <input type="text" placeholder="Your name" />

          <label>Email</label>

          <input type="email" placeholder="you@example.com" />

          <label>Password</label>

          <input type="password" placeholder="Create a password" />

          <button type="submit" className="primary-button">
            Create Account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </main>
  );
}

export default Register;

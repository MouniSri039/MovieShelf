import { Link } from "react-router-dom";

function Login() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <p className="small-heading">WELCOME BACK</p>

        <h1>Sign in to MovieShelf</h1>

        <p className="auth-description">
          Continue building your personal movie collection.
        </p>

        <form>
          <label>Email</label>

          <input type="email" placeholder="you@example.com" />

          <label>Password</label>

          <input type="password" placeholder="Enter your password" />

          <button type="submit" className="primary-button">
            Sign In
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/register">Create one</Link>
        </p>
      </div>
    </main>
  );
}

export default Login;

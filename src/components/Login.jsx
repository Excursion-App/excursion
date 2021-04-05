import React from 'react';

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <section className="login">
      <div className="loginContainer">
        <label htmlFor="username"> Username </label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name=""
          id=""
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button
                type="button"
                className="authentication"
                onClick={handleLogin}
              >
                Log In
              </button>
              <p>
                Don't have an account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={handleSignup}
                className="authentication"
              >
                Sign up
              </button>
              <p>
                Have an account?
                <span
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Log in
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;

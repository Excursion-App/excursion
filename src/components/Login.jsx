import React from 'react';

const Login = (props) => {
  const {
    displayName,
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
      {/* <div className="loginContainer"> */}
      <div className="login-wrap">
        <div className="login-html">
          <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
          <label htmlFor="tab-1" className="tab">Log In</label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab">Sign Up</label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="label">Username</label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input id="pass" type="password" className="input" data-type="password" />
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign In" />
              </div>
            </div>
            <div className="sign-up-htm">
            <div className="group">
                <label htmlFor="name" className="label">Name</label>
                <input id="name" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="user" className="label">Email Address</label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input id="pass" type="password" className="input" data-type="password" />
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign Up" />
              </div>
            </div>
          </div>
        </div>
        {/* <label htmlFor="displayName">Name</label> */}
        {/* <input
            type="text"
            autoFocus
            required
            value={displayName}
            // onChange={(e) => setEmail(e.target.value)}
          /> */}
        {/* <label htmlFor="username">Email</label> */}
        {/* <input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /> */}
        {/* <p className="errorMsg">{emailError}</p> */}
        {/* <label htmlFor="password">Password</label> */}
        {/* <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name=""
            id=""
        /> */}
        {/* <p className="errorMsg">{passwordError}</p> */}
        {/* <div className="btnContainer">
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
          </div> */}
      </div>
      {/* </div> */}
    </section>
  );
};

export default Login;

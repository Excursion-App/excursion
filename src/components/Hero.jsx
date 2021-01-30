import React from 'react';

const Hero = ({ handleLogout }) => (
  <section className="hero">
    <nav>
      <h2>Welcome</h2>
      <button
        className="authentication"
        type="button"
        onClick={handleLogout}
      >
        Log Out
      </button>
    </nav>
  </section>
);

export default Hero;

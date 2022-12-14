import React from "react";
import SignUpForm from "../components/SignUpForm";
import "./../style.css";

function SignupPage({ setUser }) {
  return (
    <div className="PageContainer">
      <br />
      <br />
      <a href="/login" className="button">
        Have an Account? Login
      </a>
      <SignUpForm setUser={setUser} />
    </div>
  );
}

export default SignupPage;

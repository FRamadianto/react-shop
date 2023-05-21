import SignIn from "../../components/sign-in/SignInForm.component";
import SignUp from "../../components/sign-up/SignUpForm.component";

import './authentication.styles.scss'
const Authentication = () => {

  return (
    <div className="authentication-container">
      {/* <h1>Sign In Page</h1> */}
      <SignIn />
      <SignUp />
    </div>
  );
};
export default Authentication;

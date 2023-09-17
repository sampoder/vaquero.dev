import { SignIn } from "@clerk/nextjs";
 
const SignInPage = () => (
  <>
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    <span style={{ display: 'none' }} className="thisPageIsClerkSignInOrSignUp"></span>
  </>
);
export default SignInPage;

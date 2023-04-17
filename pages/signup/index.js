import SignupForm from "../../components/signupForm";
import Link from "next/link";

const SignupPage = () => {
  return (
    <div>
      <h1>Nýskráning</h1>
      <SignupForm />
      <div>
        <p>Eða skráðu þig inn</p>
        <Link href="/login">Innskráning</Link>
      </div>
      <Link href="/" >Til baka </Link>
    </div>
  );
};

export default SignupPage;

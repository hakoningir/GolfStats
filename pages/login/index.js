import LoginForm from "../../components/loginForm";
import Link from "next/link";
const Login = () => {
  return (
    <div>
        <div>
            <h1>Login</h1>
            <LoginForm />
        </div>
        <div>
          <p>
              Eða gerðu nýjan aðgang.
          </p>
          <Link href="/signup">Nýskráning</Link>
        </div>
        <Link href="/">Til baka</Link>
    </div>
  );
};

export default Login;

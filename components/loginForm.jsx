import { useState } from "react";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
      
    try{
      const response = await fetch("login",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      console.log(response);
      if(response.ok){
        router.push('/user');
      } else {
        console.error("Login failed");
      }
    } catch (error){
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label>
        Notendanafn:
        <input
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      </div>
      <div>
      <label>
        Lykilorð:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      </div>
      <button type="submit">Innskrá</button>
    </form>
  );
};

export default LoginForm;

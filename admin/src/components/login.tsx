import axios from "axios";
import { useState } from "react";
import { LoginWrap, Field, Btn } from "../assets/style/style";
import { backendUrl } from "../App";

interface LoginProps {
  setToken: (token: string) => void;
}

const Login: React.FC<LoginProps> = ({ setToken }) => {
  const theme = {
    primaryRadius: "10px",
    primaryFont: "16px",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/admin", {
        email,
        password,
      });

      if (response.data.success) setToken(response.data.token);
      //else console.log(response.data.message);

      setEmail("");
      setPassword("");
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <LoginWrap theme={theme}>
      <h1>Admin Panel</h1>

      <form onSubmit={handleSubmit}>
        <Field>
          <p>Email Address</p>
          <input
            type="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
          />
        </Field>

        <Field>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            required
          />
        </Field>

        <Btn className="btn">Login</Btn>
      </form>
    </LoginWrap>
  )
}

export default Login
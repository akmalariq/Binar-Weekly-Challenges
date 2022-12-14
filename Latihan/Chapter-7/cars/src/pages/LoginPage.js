import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmailHandler = (e) => {
    const value = e.target.value;

    setEmail(value);
  };

  const onChangePasswordHandler = (e) => {
    const value = e.target.value;

    setPassword(value);
  };
  const onSubmitButtonHandler = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        email,
        password,
      };

      const registerResponse = await axios.post(
        "http://localhost:2000/auth/login",
        payload
      );
      console.log(registerResponse);

      if (registerResponse.status === 200) {
        console.log("berhasil daftar");

        const jwtToken = registerResponse.data.data.token;

        localStorage.setItem("user_token", jwtToken);

        navigate("/");
      }

      const registerResponseCurrentUser = await axios.post(
        "http://localhost:2000/auth/me",
        payload
      );

      if (registerResponseCurrentUser.status === 200) {
        const username = registerResponseCurrentUser.data.data.name;

        localStorage.setItem("username", username);

        navigate("/");
      }
    } catch (err) {
      console.log("gagal login:", err);
    }
  };

  return (
    <div>
      <div>
        Email: <input onChange={(e) => onChangeEmailHandler(e)} />
      </div>
      <div>
        Password: <input onChange={(e) => onChangePasswordHandler(e)} />
      </div>
      <button onClick={(e) => onSubmitButtonHandler(e)}>Login</button>
    </div>
  );
}

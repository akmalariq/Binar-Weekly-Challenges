import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [profilePicture, setProfilePicture] = useState()

  const onChangeNameHandler = (e) => {
    const value = e.target.value;

    setName(value);
    console.log(name)
  }
  const onChangeEmailHandler = (e) => {
    const value = e.target.value;

    setEmail(value);
  }
  const onChangePasswordHandler = (e) => {
    const value = e.target.value;

    setPassword(value);
  }
  // const onChangePictureHandler = (e) => {
  //   const value = e.target.files[0];

  //   // if (value.type !== "image/png") {
  //   //   console.log("Format gambar harus .png");
  //   // }

  //   setProfilePicture(value);
  // }

  const onSubmitButtonHandler = async (e) => {
    e.preventDefault();

    try {
      // const payload = new FormData();

      // payload.append("name", name);
      // payload.append("email", email);
      // payload.append("password", password);

      const imgURL  = "https://randomuser.me/api/portraits/men/93.jpg"

      const payload = {
        name, email, password, imgURL 
      }
      // payload.append("profile_picture", profilePicture);

      const registerResponse = await axios.post("http://localhost:2000/auth/register", payload);

      if (registerResponse.status === 200) {
        console.log("berhasil daftar");
        navigate("/login");
      }
    } catch (err) {
      console.log("gagal daftar:", err)
    }
  }

  return (
    <div>
      <div>
        Name: <input onChange={(e) => onChangeNameHandler(e)} />
      </div>
      <div>
        Email:  <input onChange={(e) => onChangeEmailHandler(e)} />
      </div>
      <div>
        Password:  <input onChange={(e) => onChangePasswordHandler(e)} />
      </div>
      {/* <div>
        Profile Picture: <input type="file" onChange={(e) => onChangePictureHandler(e)} />
      </div> */}
      <button onClick={(e) => onSubmitButtonHandler(e)} >Register</button>
    </div >
  )
}

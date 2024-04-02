import { Button } from "flowbite-react";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInStart, signInSucces } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";


const OAuth = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    //with this help of this, everytime if u want to signin with google
    //they will show u all the accounts which are available
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultFromGoogle = await signInWithPopup(auth, provider);
      //after getting the information of the account from google,
      //we will be sending that results to the backend to store, in mongodb

      const res = await fetch('/api/auth/google',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: resultFromGoogle.user.displayName,
            email: resultFromGoogle.user.email,
            googlePhotoUrl: resultFromGoogle.user.photoURL,
        })
      })

      const data = await res.json();
      console.log(data);
      if(res.ok){
        console.log('working')
        dispatch(signInSucces(data));
        navigate("/"); // Use useNavigate to navigate
      }

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      type="button"
      gradientDuoTone="pinkToOrange"
      outline
      onClick={handleGoogleClick}
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Continue with Google
    </Button>
  );
};

export default OAuth;

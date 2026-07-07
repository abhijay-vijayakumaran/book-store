import React, { use } from "react";
import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

import { googleLoginAPI, loginAPI, registerAPI } from "../services/allAPIs";

import { Bounce, ToastContainer, toast } from "react-toastify";

//import googlelogin from react-oath/google npm
import { GoogleLogin } from "@react-oauth/google";

//jwtDecode install and import
import { jwtDecode } from "jwt-decode";

// register prop passed from app
function Auth({ register }) {
  const navigate = useNavigate();

  //----REGISTER----

  //State Creation
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    console.log(userDetails);

    const { username, email, password } = userDetails;
    if (!username || !email || !password) {
      alert("Please Fill The Form");
    } else {
      //try and catch
      try {
        const response = await registerAPI({ username, email, password });
        console.log(response);

        if (response.status == 200) {
          // alert(response.data.message)
          //alert() --using react-toastify

          toast.success(response.data.message, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });

          //Navigate to Login page when response.status==200
          setTimeout(() => {
            navigate("/login");
          }, 4000);
        }
        // else if ((response.status == 201)) {
        // }
        else {
          // alert("User Already Existing...")

          toast.warn("User Already Existing...", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  //----LOGIN----

  const handleLogin = async () => {
    const { email, password } = userDetails;

    if (!email || !password) {
      alert("Please Fill The Form");
    } else {
      const response = await loginAPI({ email, password });
      console.log(response);

      try {
        if (response.status === 200) {
          // alert("Login Success")


          //Admin Redirect
          if (response.data.existingUser.role == "Admin") {

                  sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem(
            "userDetails",
            JSON.stringify(response.data.existingUser),
          );
           return navigate('/admin-home')

          }else{

          //    toast.success(response.data.message, {
          //   position: "bottom-right",
          //   autoClose: 3000,
          //   hideProgressBar: false,
          //   closeOnClick: false,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          //   theme: "light",
          //   transition: Bounce,
          // });
          }




          //toastify
          toast.success("Loggedin Successfully", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });

          setTimeout(() => {
            navigate("/");
          }, 2000);

          //Stores Token and User Details into SessionStorage
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem(
            "userDetails",
            JSON.stringify(response.data.existingUser),
          );
        }
        // else if (response.response.data.message) {

        // }
        else {
          // alert("ERRORR")

          //toastify
          toast.error("Incorrect email or password", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  //--handle google authentication fn

  const handleGoogleAuth = async (credentialResponse) => {
    //pass credential response form the googlelogin tag at below

    //value incredentialResponse.credential
    const decoded = jwtDecode(credentialResponse.credential);

    //shows all details of the gmail id profile(name,gmail,fullname etc..)
    console.log(decoded);

    try {
      const response = await googleLoginAPI({
        username: decoded.name,
        email: decoded.email,
        password: "google password",
        profile: decoded.picture,
      });
      console.log(response);

      if (response.status == 200) {
        //if success navigates to home page
        navigate("/");

        //Stores Token and User Details into SessionStorage
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem(
          "userDetails",
          JSON.stringify(response.data.existingUser),
        );
      }
    } catch (err) {
      console.log("Google ERROR" + err);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center flex-col bg-[url(https://img.freepik.com/free-photo/open-book-more-books_23-2148213810.jpg?t=st=1721778194~exp=1721781794~hmac=ccb27007259d20e3b0ac7ba53bfb8abba03070caa5b56b85535d3cbc7e9a87f9&w=1060)] bg-cover bg-center">
        <div className="p-10">
          <h1 className="text-3xl font-bold text-center text-white">
            Book Store
          </h1>
          <div
            style={{ width: "400px" }}
            className="bg-black text-white p-5 flex flex-col justify-center items-center my-5"
          >
            <div
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              className="border mb-5 flex justify-center items-center"
            >
              <CiUser className="text-3xl" />
            </div>

            <h1 className="text-2xl">{register ? "Register" : "Login"}</h1>

            <form className="my-5 w-full">
              {register && (
                <input
                  placeholder="Username"
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, username: e.target.value })
                  }
                  type="text"
                  className="bg-white p-3 w-full rounded placeholder-gray-500 my-5 text-black "
                />
              )}

              <input
                placeholder="Email ID"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
                type="text"
                className="bg-white w-full rounded placeholder-gray-500 mb-5 text-black p-3 "
              />

              <div className="flex items-center">
                <input
                  placeholder="Password"
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, password: e.target.value })
                  }
                  type="password"
                  className="bg-white w-full rounded placeholder-gray-500 mb-5 text-black p-3 "
                />
              </div>

              <div className="flex justify-between mb-5">
                <p className="text-xs text-orange-300">
                  Never share your password with others
                </p>
                <button className="text-xs underline">Forgot Password</button>
              </div>

              <div className="text-center">
                {register ? (
                  <button
                    type="button"
                    onClick={handleRegister}
                    className="bg-green-700 p-2 w-full rounded"
                  >
                    Register
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleLogin}
                    className="bg-green-700 p-2 w-full rounded"
                  >
                    Login
                  </button>
                )}
              </div>

              <div className="my-5 text-center">
                {register ? (
                  <div>
                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        console.log(credentialResponse);
                      }}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />
                    <p className="text-blue-600 mt-3">
                      Are you Already a User?
                      <Link to={"/login"} className="underline ms-5">
                        Login
                      </Link>
                    </p>
                  </div>
                ) : (
                  <div>
                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        console.log(credentialResponse);

                        //call handleGoogleAuth and pass credentialResponse to it
                        handleGoogleAuth(credentialResponse);
                      }}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />
                    <p className="text-blue-600 mt-3">
                      Are you a New User?
                      <Link to={"/register"} className="underline ms-5">
                        Register
                      </Link>
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* add toast Container form toastify */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default Auth;

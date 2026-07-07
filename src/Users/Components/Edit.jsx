import React, { useEffect, useState } from "react";
import {
  Button,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Label,
  Textarea,
  TextInput,
} from "flowbite-react";
import { FaUserEdit } from "react-icons/fa";
import { serverUrl } from "../../services/serverUrl";
import { updateProfileAPI } from "../../services/allAPIs";

function Edit() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const [preview, setPreview] = useState("");
  const [token, setToken] = useState("");
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    cpassword: "",
    bio: "",
    profile: "",
  });
  const [existingProfile, setExistingProfile] = useState("");

  const handleUpload = (e) => {
    console.log(e.target.files);

    //image file to image url
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    console.log(imageUrl);
    setPreview(imageUrl);

  setUserDetails({
    ...userDetails,
    profile: e.target.files[0],
  });
  };

  //Updateonclick fn
  const handleUpdate = async () => {
    const { username, password, cpassword, bio, profile } = userDetails;

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const reqBody = new FormData();
    // reqBody.append("title",title)

    for (let key in userDetails) {
      if (key !== "profile") {
        reqBody.append(key, userDetails[key]);
      } else {
        preview
          ? reqBody.append("profile", profile)
          : reqBody.append("profile", existingProfile);
      }
    }
      try {
        const response = await updateProfileAPI(reqBody, reqHeader);
        console.log(response);

        if (response.status == 200) {
          setUserDetails(response.data.updateUser);
          sessionStorage.setItem(
            "userDetails",
            JSON.stringify(response.data.updateUser),
          );
        }
      } catch (err) {
        console.log(err);
      }
    
  };

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
    let user = JSON.parse(sessionStorage.getItem("userDetails"));
    setUserDetails({
      ...userDetails,
      username: user.username,
      password: user.password,
      bio: user.bio,
      profile: user.profile,
    });
    setExistingProfile(user.profile);
  }, []);
  console.log(userDetails, token);

  return (
    <div>
      {/* Edit Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="me-35 p-4 !bg-black hover:!bg-gray-900 border border-gray-700"
      >
        <FaUserEdit className="text-white" />
      </Button>

      {/* Drawer */}
      <Drawer
        open={isOpen}
        onClose={handleClose}
        className="!bg-black !text-white [&>div]:!bg-black [&>div]:!text-white"
      >
        <DrawerHeader
          title="Update Profile"
          className="!bg-black !text-white"
        />

        <DrawerItems className="!bg-black !text-white">
          <form>
            {/* Profile Image */}
            <div className="relative mb-5">
              <label htmlFor="img">
                <input
                  onChange={(e) => handleUpload(e)}
                  id="img"
                  hidden
                  type="file"
                />
                {existingProfile ? (
                  //ribin
                  existingProfile.startsWith(
                    "https://lh3.googleusercontent.com/",
                  ) ? (
                    <img
                      src={preview ? preview : existingProfile}
                      height={"100px"}
                      width={"100px"}
                      className="rounded-full mx-auto"
                      alt=""
                    />
                  ) : (
                    //
                    <img
                      src={
                        preview
                          ? preview
                          : `${serverUrl}/uploads/${userDetails.profile}`
                      }
                      height={"100px"}
                      width={"100px"}
                      className="rounded-full mx-auto"
                      alt=""
                    />
                  )
                ) : (
                  //normal user
                  <img
                    src={
                      preview
                        ? preview
                        : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8&w=1000&q=80"
                    }
                    alt=""
                    className="rounded-full shadow-2xl mx-auto"
                    width="160"
                  />
                )}

                <FaUserEdit className="text-white bg-black rounded-full text-4xl p-1 absolute top-20 left-40" />
              </label>
            </div>

            {/* Name */}
            <div className="mb-4">
              <Label className="mb-2 block !text-white">Your Name</Label>
              <TextInput
                type="text"
                  value={userDetails.username}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, username: e.target.value })
                }
              
                placeholder="Name"
                className="[&_input]:!bg-gray-200 [&_input]:!text-black"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <Label className="mb-2 block !text-white">Password</Label>
              <TextInput
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
                type="password"
                className="[&_input]:!bg-gray-200 [&_input]:!text-black"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <Label className="mb-2 block !text-white">Confirm Password</Label>
              <TextInput
                type="password"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, cpassword: e.target.value })
                }
                className="[&_input]:!bg-gray-200 [&_input]:!text-black"
              />
            </div>

            {/* Designation */}
            <div className="mb-4">
              <Label className="mb-2 block !text-white">Designation</Label>
              <Textarea
                rows={4}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, bio: e.target.value })
                }
                placeholder="Book Store User"
                className="[&_textarea]:!bg-gray-200 [&_textarea]:!text-black"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-evenly mt-6">
              <Button
                onClick={handleUpdate}
                className="!bg-white !text-black hover:!bg-gray-300"
              >
                Update
              </Button>

              <Button
                color="gray"
                className="!bg-white !text-black hover:!bg-gray-300"
          
              >
                Reset
              </Button>
            </div>

            <div className="mt-8 text-center text-gray-400 text-sm">
              <p>fadedInk.com</p>
              <p>+91 212-456-7890</p>
            </div>
          </form>
        </DrawerItems>
      </Drawer>
    </div>
  );
}

export default Edit;

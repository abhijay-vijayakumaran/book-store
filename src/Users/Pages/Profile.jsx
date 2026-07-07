import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Edit from "../Components/Edit";
import { Tabs, TabItem, Card, Button } from "flowbite-react";
import { HiUserCircle, HiAdjustments } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { addABookAPI } from "../../services/allAPIs";


export default function Profile() {
  //1. Create a state for holding all the book details
  //same spelling as in server bookController.js
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    noofpages: "",
    imageUrl: "",
    price: "",
    dprice: "",
    abstract: "",
    publisher: "",
    language: "",
    isbn: "",
    category: "",
    UploadedImages: [],
  });

  //State for displaying image
  const [preview, setPreview] = useState([]);
  const [token, setToken] = useState([]);

  //onclick submit button of the form
  const handleAddBook = async () => {
    const {
      title,
      author,
      noofpages,
      imageUrl,
      price,
      dprice,
      abstract,
      publisher,
      language,
      isbn,
      category,
      UploadedImages,
    } = bookDetails;

    console.log(bookDetails);

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const reqBody = new FormData();
    // reqBody.append("title",title)

    for (let key in bookDetails) {
      if (key !== "UploadedImages") {
        reqBody.append(key, bookDetails[key]);
      } else {
        bookDetails.UploadedImages.forEach((file) =>
          reqBody.append("UploadedImages", file),
        );
      }
    }

    try {
      const response = await addABookAPI(reqBody, reqHeader);
      console.log(response);
      //book added so status code is 201
      if (response.status == 201) {
        alert(response.data.message);
      } else {
        alert("err");
      }
    } catch (err) {
      console.log("Error" + err);
    }
  };

  const handleFormReset = () => {
    // setBookDetails({
    //   title: "",
    //   author: "",
    //   noofpages: "",
    //   imageUrl: "",
    //   price: "",
    //   dprice: "",
    //   abstract: "",
    //   publisher: "",
    //   language: "",
    //   isbn: "",
    //   category: "",
   
    // });

    setPreview([])
  };

  //onchange passes event to the fn
  const handleUpload = (e) => {
    //e.target.files(passes files so only 1 value is added only)
    console.log(e.target.files);

    //for multiple files(using array)
    let imageArray = bookDetails.UploadedImages;

    if (imageArray.length < 3) {
      imageArray.push(e.target.files[0]);
      console.log(imageArray);

      setBookDetails({ ...bookDetails, UploadedImages: imageArray });
    }

    //Img files to ImgURL
    const imageURL = URL.createObjectURL(e.target.files[0]);
    console.log(imageURL); //checks is the image url is displayed in theconsole

    let urlArray = preview;
    if (urlArray.length < 3) {
      urlArray.push(imageURL);
      setPreview(urlArray); //sets image to the preview state
    }
    // setPreview(imageURL); //sets image to the preview state
  };

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);

  return (
    <div className="bg-white min-h-screen">
     <Header/>
      <div className="">
        <div className="h-56 bg-slate-900 relative">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            className="w-44 h-44 rounded-full border-4 border-white absolute left-20 -bottom-20 object-cover"
          />
        </div>

        <div className="px-20 pt-28 flex justify-between">
          <div>
            <div className="flex">
              <h1 className="text-5xl font-bold me-5">Alen Luka </h1>{" "}
              <img
                src="https://www.freeiconspng.com/uploads/blue-tick-icon-1.png"
                width={"20px"}
                height={"20px"}
                alt=""
              />
            </div>
            <p className="mt-4 text-gray-600 max-w-4xl">Book Store user </p>
          </div>
          <Edit />
        </div>

        <div className="px-20 mt-10">
          <Tabs aria-label="Profile" variant="underline">
            <TabItem title="Sell Book" icon={HiUserCircle}>
              <div className="bg-gray-200 rounded-lg p-10 mt-6">
                <div className="bg-gray-200 rounded-lg p-10 mt-5">
                  <h2 className="text-5xl font-semibold text-center mb-10">
                    Book Details
                  </h2>

                  <form>
                    <div className="grid grid-cols-2 gap-6">
                      <input
                        type="text"
                        onChange={(e) =>
                          setBookDetails({
                            ...bookDetails,
                            title: e.target.value,
                          })
                        }
                        placeholder="Title"
                        className="p-3 rounded"
                      />

                      <input
                        type="text"
                        onChange={(e) =>
                          setBookDetails({
                            ...bookDetails,
                            publisher: e.target.value,
                          })
                        }
                        placeholder="Publisher"
                        className="p-3 rounded"
                      />

                      <input
                        type="text"
                        onChange={(e) =>
                          setBookDetails({
                            ...bookDetails,
                            author: e.target.value,
                          })
                        }
                        placeholder="Author"
                        className="p-3 rounded"
                      />

                      <input
                        type="text"
                        onChange={(e) =>
                          setBookDetails({
                            ...bookDetails,
                            language: e.target.value,
                          })
                        }
                        placeholder="Language"
                        className="p-3 rounded"
                      />

                      <input
                        type="number"
                        onChange={(e) =>
                          setBookDetails({
                            ...bookDetails,
                            noofpages: e.target.value,
                          })
                        }
                        placeholder="No of Pages"
                        className="p-3 rounded"
                      />

                      <input
                        type="text"
                        onChange={(e) =>
                          setBookDetails({
                            ...bookDetails,
                            isbn: e.target.value,
                          })
                        }
                        placeholder="ISBN"
                        className="p-3 rounded"
                      />

                      <input
                        type="text"
                        onChange={(e) =>
                          setBookDetails({
                            ...bookDetails,
                            category: e.target.value,
                          })
                        }
                        placeholder="Category"
                        className="p-3 rounded"
                      />

                      <input
                        type="number"
                        onChange={(e) =>
                          setBookDetails({
                            ...bookDetails,
                            price: e.target.value,
                          })
                        }
                        placeholder="Price"
                        className="p-3 rounded"
                      />

                      <input
                        type="number"
                        onChange={(e) =>
                          setBookDetails({
                            ...bookDetails,
                            dprice: e.target.value,
                          })
                        }
                        placeholder="Discount Price"
                        className="p-3 rounded"
                      />

                      <input
                        type="text"
                        onChange={(e) =>
                          setBookDetails({
                            ...bookDetails,
                            imageUrl: e.target.value,
                          })
                        }
                        placeholder="Image Url"
                        className="p-3 rounded"
                      />
                    </div>

                    <textarea
                      rows={5}
                      onChange={(e) =>
                        setBookDetails({
                          ...bookDetails,
                          abstract: e.target.value,
                        })
                      }
                      placeholder="Abstract"
                      className="w-100 mt-6 rounded p-3"
                    />

                    <div className="flex flex-wrap justify-center mt-3 gap-4">
                      {preview?.map((item) => (
                        <div>
                          <img
                            src={item}
                            width="170"
                            className="mx-auto cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>

                    {/* //replace inputbox into image by  grouping it with label (htmlFor and input id should be same) */}
                    <div className="mt-8 text-center">
                      <label htmlFor="img">
                        {/* onChange pass event into the fn handleUpload */}
                        <input
                          id="img"
                          hidden
                          type="file"
                          onChange={(e) => handleUpload(e)}
                        />

                        {preview.length < 3 ? (
                          <div>
                            <img
                              src="https://cdn1.iconfinder.com/data/icons/round-vol-4/512/uploading-512.png"
                              width="170"
                              className="mx-auto cursor-pointer"
                            />
                            <h2>upload images</h2>
                          </div>
                        ) : (
                          <h2>only three images can be uploaded</h2>
                        )}

                        {/* preview state set inside handleUpload fn */}
                      </label>
                    </div>

                    <div className="flex justify-end gap-4 mt-6">
                      <button
                        type="reset"
                        onClick={handleFormReset}
                        className="bg-orange-500 px-6 py-2 rounded text-white"
                      >
                        Reset
                      </button>

                      <button
                        type="button"
                        onClick={handleAddBook}
                        className="bg-green-600 px-6 py-2 rounded text-white"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </TabItem>

            <TabItem title="Book Status" icon={MdDashboard}>
              <Card className="w-75 shadow-lg rounded-xl">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg"
                  alt="Book"
                  className="h-64 w-full object-cover rounded-lg"
                />

                <div className="mt-4">
                  <h5 className="text-2xl font-bold text-gray-900">
                    Atomic Habits
                  </h5>

                  <p className="text-gray-600 mt-2">
                    <strong>Author :</strong> James Clear
                  </p>

                  <p className="text-gray-600">
                    <strong>Category :</strong> Self Help
                  </p>

                  <p className="text-gray-600">
                    <strong>Language :</strong> English
                  </p>

                  <p className="text-lg font-semibold text-green-600 mt-2">
                    ₹499
                  </p>

                  <span className="inline-block mt-3 px-3 py-1 bg-green-600 text-white rounded-full text-sm">
                    Available
                  </span>
                </div>
              </Card>
            </TabItem>

            <TabItem title="Purchase History" icon={HiAdjustments}>
              <Card className="w-75 shadow-lg rounded-xl">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/81gepf1eMqL.jpg"
                  alt="Book"
                  className="h-64 w-full object-cover rounded-lg"
                />

                <h5 className="text-2xl font-bold mt-4">Clean Code</h5>

                <p className="text-gray-600">Robert C. Martin</p>

                <p className="font-semibold text-green-600 mt-2">₹699</p>

                <p className="text-sm text-gray-500">
                  Purchased On : 25 June 2026
                </p>
              </Card>
            </TabItem>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

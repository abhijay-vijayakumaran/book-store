import { commonAPI } from "./commonAPI";
import { serverUrl } from "./serverUrl";


///Register
export const registerAPI=(reqBody)=>{
    return commonAPI('POST',`${serverUrl}/api/register`,reqBody,{})
}


//Login
export const loginAPI=(reqBody)=>{
    return commonAPI('POST',`${serverUrl}/api/login`,reqBody,{})
}
//Google Login
export const googleLoginAPI=(reqBody)=>{
    return commonAPI('POST',`${serverUrl}/api/googleLogin`,reqBody,{})
}


//Get Home book
// api/books (for displaying recently added 4 books to the home page )
export const getHomeAPI=()=>{
    return commonAPI('GET',`${serverUrl}/api/homeBooks`,{},{})
}

//Get All books  (for displaying all books)and(no need for reqbody bcz there is no request)
export const getAllBooksAPI=(searchKey,reqHeader)=>{
    return commonAPI('GET',`${serverUrl}/api/books?search=${searchKey}`,{},reqHeader)
}

//View A Book
export const viewABookAPI=(id,reqHeader)=>{
    return commonAPI('GET',`${serverUrl}/api/viewBook/${id}`,{},reqHeader)
}



//Add A Book
export const addABookAPI=(reqBody,reqHeader)=>{
    return commonAPI('POST',`${serverUrl}/api/addbook`,reqBody,reqHeader)
}


//Update Profile
export const updateProfileAPI=(reqBody,reqHeader)=>{
    return commonAPI('PUT',`${serverUrl}/api/updateUser`,reqBody,reqHeader)
}


//make Payment
export const makePaymentAPI=(reqBody,reqHeader)=>{
    return commonAPI('PUT',`${serverUrl}/api/makePayment`,reqBody,reqHeader)
}



// --Admin--

//get adminBooks
export const getAllAdminBooksAPI=(reqHeader)=>{
    return commonAPI('GET',`${serverUrl}/api/getBooks`,{},reqHeader)
}

//get adminBooks
export const getAllAdminUsersAPI=(reqHeader)=>{
    return commonAPI('GET',`${serverUrl}/api/getUsers`,{},reqHeader)
}

//Book Approval
 export const bookApprovalAPI=(reqBody,reqHeader)=>{
    return commonAPI('PUT',`${serverUrl}/api/bookApproval`,reqBody,reqHeader)
}

//Book Approval
 export const bookRejectAPI=(reqBody,reqHeader)=>{
    return commonAPI('PUT',`${serverUrl}/api/bookReject`,reqBody,reqHeader)
}





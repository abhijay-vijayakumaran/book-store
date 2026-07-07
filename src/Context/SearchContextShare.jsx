import React, { createContext, useState } from 'react'

//1create a context using CreateContext
export const SearchContext = createContext()


//4pass Children
function SearchContextShare({ children }) {

    //2For globally share data, we create a state
    const [searchKey, setSearchkey] = useState("")


    return (
        //3 state and function pass as object inside SearchContext.Provider as value attribute values
        <SearchContext.Provider value={{ searchKey, setSearchkey }}>
            {children}
        </SearchContext.Provider>
    )
}
//4 next main.jsx

export default SearchContextShare

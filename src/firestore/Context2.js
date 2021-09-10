import React,{useState,createContext} from "react";




export const ViewContext = createContext(null)
const [viewPost,setViewPost] = useState()


function ViewFunction({children}){
    return(
        <ViewContext.Provider value={{viewPost,setViewPost}}>
            {children}
        </ViewContext.Provider>
    )
}


export default ViewFunction
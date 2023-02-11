import { createContext, useContext, useReducer } from "react";
import { SearchContext } from "./searchContext";

export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {

    const { searchData, searchDispatch } = useContext(SearchContext);

    const INITIAL_STATE = {
        allBlogs: [],
    };

    const blogReducer = (state, action) => {
        switch (action.type) {
            case "SET_BLOGS":
                console.log(action.payload.allBlogs);
                return {
                    allBlogs: action.payload.allBlogs,
                };

            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(blogReducer, INITIAL_STATE);

    return (
        <BlogContext.Provider value={{ data: state, dispatch }}>
            {children}
        </BlogContext.Provider>
    );
}
import { createContext, useReducer } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {

    const INITIAL_STATE = {
        searchBlog: "",
    }

    const searchReducer = (state, action) => {
        switch (action.type) {
            case "SET_SEARCH":
                return {
                    searchBlog: action.payload.searchBlog,
                };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE);
    return (
        <SearchContext.Provider value={{ searchData: state, searchDispatch: dispatch }}>
            {children}
        </SearchContext.Provider>
    )

}
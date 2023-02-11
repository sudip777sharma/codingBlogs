import React, { useContext, useState } from 'react'
import Link from "next/link";
import { SearchContext } from '@/context/searchContext';
import { BlogContext } from '@/context/BlogContext';
const Navbar = () => {
    const { data, dispatch } = useContext(BlogContext);
    const { searchData, searchDispatch } = useContext(SearchContext);
    const [searchBlog, setSearchBlog] = useState("");
    const handleSearch = () => {

    }

    const handleInput = (e) => {
        const { value, name } = e.target;
        setSearchBlog(value);

        const blogs = data.allBlogs;
        console.log(data.allBlogs);
        searchDispatch({ type: "SET_SEARCH", payload: { searchBlog: value } });
        // const filteredBlogs = blogs.filter((blog) => blog.title.includes(value));
        // dispatch({ type: "SET_BLOGS", payload: { allBlogs: filteredBlogs } })
    }

    return (
        <>
            <nav className="text-zinc-700 sticky top-0 z-50 mb-5 px-5 w-screen h-16 flex items-center justify-between backdrop-sepia-0 bg-white/10 backdrop-blur-sm">

                <h1 className="text-2xl font-bold">
                    CodingBlogs
                </h1>
                <div className='mx-4 bg-zinc-300 rounded-full p-1'>
                    <input
                        className='rounded-full p-1 px-5 m-1 outline-none text-black'
                        type="text"
                        name='inputSearchBlog'
                        onChange={(e) => handleInput(e)}
                        placeholder='search blog'
                    />
                    <button
                        className='p-1 px-3 m-1 bg-green-600 h-8 text-white rounded-full shadow-sm ring-1 ring-green-600 hover:bg-green-700 hover:ring-green-700 font-bold'
                        onClick={handleSearch}
                    >
                        search
                    </button>
                </div>
                <ul className='flex gap-8 text-xl font-bold'>
                    <Link href='/' style={{ textDecoration: 'none' }}>
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link href='/Blog' style={{ textDecoration: 'none' }}>
                        <li>
                            Blog
                        </li>
                    </Link>
                    <Link href='/About' style={{ textDecoration: 'none' }}>
                        <li>
                            About
                        </li>
                    </Link>
                    <Link href='/Contact' style={{ textDecoration: 'none' }}>
                        <li>
                            Contact
                        </li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
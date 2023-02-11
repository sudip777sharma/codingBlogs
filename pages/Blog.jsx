import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link';

import InfiniteScroll from 'react-infinite-scroll-component';
import { TailSpin } from 'react-loader-spinner'
import { BlogContext } from '@/context/BlogContext';
import { SearchContext } from '@/context/searchContext';

const Blog = (props) => {

    const { data, dispatch } = useContext(BlogContext);
    const { searchData, searchDispatch } = useContext(SearchContext);
    const [blogs, setBlogs] = useState(props.allBlogs);
    const [count, setCount] = useState(5);

    const fetchMoreData = () => {
        console.log("fetchData");
        setCount((count) => {
            return count + 2;
        });
        setTimeout(() => {
            fetchData();
        }, 1000);
    }

    console.log("count: ", count);
    const fetchData = async () => {
        console.log("fetchData");
        let data = await fetch(`/api/blogs/?count=${count + 2}`);
        let parsedData = await data.json();
        dispatch({ type: "SET_BLOGS", payload: { allBlogs: parsedData } });
        setBlogs(parsedData);
    }
    return (
        <div className="">
            <InfiniteScroll
                dataLength={blogs?.length}
                next={fetchMoreData}
                hasMore={blogs?.length < 20}
                loader={
                    <TailSpin
                        height="50"
                        width="50"
                        color="blue"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass="flex justify-center p-5"
                        visible={true}
                    />
                }
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>reload</b>
                    </p>
                }
            >
                <div className="max-w-2xl flex flex-col gap-10 text-lg">
                    {
                        (Object.keys(data?.allBlogs).length == 0 ? blogs : data.allBlogs)?.filter((blog) => blog.title.includes(searchData.searchBlog)).map((blogItem, indx) => {
                            return (
                                <div
                                    className=""
                                    key={`${blogItem.slug}${indx}`}>
                                    <Link href={`/blogpost/${blogItem.slug}`}>
                                        <h1
                                            className='font-bold'
                                        >{blogItem.title}</h1>
                                    </Link>
                                    <p
                                        className='opacity-70'
                                    >
                                        {`${blogItem.content.slice(0, 180)}...`}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </InfiniteScroll>
        </div>
    )
}

export async function getServerSideProps(context) {
    let data = await fetch('http://localhost:3000/api/blogs/?count=5');
    let allBlogs = await data.json();
    return {
        props: { allBlogs }
    }
}
// export async function getStaticProps(context) {
//     let data = await fs.promises.readdir("blogdata");
//     let myfile;
//     let allBlogs = [];
//     for (let indx = 0; indx < 5; indx++) {
//         const item = data[indx];
//         console.log(item);
//         myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
//         allBlogs.push(JSON.parse(myfile));
//     }
//     return {
//         props: { allBlogs },
//     }
// }
export default Blog
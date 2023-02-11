import React, { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

const Slug = (props) => {
  // const router = useRouter();
  // const { slug } = router.query;
  // console.log(slug);
  const [blog, setBlog] = useState(props.blog);

  // useEffect(() => {
  //   if (!router.isReady) return;
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((data) => {
  //     return data.json();
  //   }).then((parsedData) => {
  //     console.log("parsedData: ", parsedData);
  //     setBlog(parsedData);
  //   })
  // }, [router.isReady])


  return (
    <div className='max-w-2xl flex flex-col gap-4 text-lg'>
      <h1 className='font-bold'>
        {
          blog && blog.title
        }
      </h1>
      <hr />
      <div className="content">
        {
          blog && blog.content
        }
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let blog = await data.json();
  console.log("parsedData blog: ", blog);
  return {
    props: { blog }
  }
}

export default Slug
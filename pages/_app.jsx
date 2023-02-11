import Navbar from '@/components/Navbar';
import '@/styles/globals.css'
import { BlogContextProvider } from './context/BlogContext';
import { SearchContextProvider } from './context/searchContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className='p-0 m-0 flex flex-col items-center bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300'>
        <SearchContextProvider>
          <BlogContextProvider>
            <Navbar />
            <Component {...pageProps} />
          </BlogContextProvider>
        </SearchContextProvider>
      </div>
    </>
  );
}

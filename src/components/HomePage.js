import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/action';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);


  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  if (loading) {
    return (
      <div className='flex justify-center items-center'>
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='bg-black text-gray-100 p-3'>
    <h1 className='text-2xl tracking-wide text-center font-bold uppercase underline my-3 mb-6'>Home Page</h1>
    <div className='bg-black text-gray-100 flex flex-wrap justify-center gap-10 mx-4'>
      {posts.map(post => (
          <div className='w-64 border-2 border-gray-800 p-2 rounded-lg' key={post.id}>
            <img className='w-full mb-1' src={post.imgSrc} alt="" />
            <h2><span className='text-lg underline'>Post Id:</span> {post.id}</h2>
            <h2><span className='text-lg underline'>Post Title:</span> {post.title.slice(0, 15)}...</h2>
            <p><span className='text-lg underline'>Post Body:</span> {post.body.slice(0, 100)}...</p>
            <Link className='text-blue-600 hover:text-blue-400' to={`/item/${post.id}`}>Read More...</Link>
          </div>
      ))}
    </div>
    </div>
  );
};

export default HomePage;

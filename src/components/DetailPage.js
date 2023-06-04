import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DetailPage = () => {
  const { id } = useParams();
  const posts = useSelector(state => state.posts);
  const post = posts.find(post => post.id === Number(id));

  return (
    <div className='bg-black h-[100vh] text-gray-100 p-5 px-6'>
      <h1 className='text-center text-xl font-bold tracking-wide underline py-2 pb-12'>Detail Page For Post with Id: {post.id}</h1>
      <div className='w-2/3 ml-10'>
        <img className='mb-1' src={post.imgSrc} alt="" />
        <h2 className='mb-1'><span className='text-lg underline'>Post Id:</span> {post.id}</h2>
        <h2 className='mb-1'><span className='text-lg underline'>Post Title:</span> {post.title}</h2>
        <p className='mb-1'><span className='text-lg underline'>Post Body:</span> {post.body}</p>
      </div>
    </div>
  );
};

export default DetailPage;

export const fetchPostsRequest = () => {
  return {
    type: 'FETCH_POSTS_REQUEST'
  };
};

export const fetchPostsSuccess = posts => {
  const updatedPosts = posts.map(post => ({
    ...post,
    imgSrc: `https://picsum.photos/200?random=${post.id}`
  }));

  return {
    type: 'FETCH_POSTS_SUCCESS',
    payload: updatedPosts
  };
};

export const fetchPostsFailure = error => {
  return {
    type: 'FETCH_POSTS_FAILURE',
    payload: error
  };
};

export const fetchPosts = () => {
  return dispatch => {
    dispatch(fetchPostsRequest());
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        dispatch(fetchPostsSuccess(posts));
      })
      .catch(error => {
        dispatch(fetchPostsFailure(error.message));
      });
  };
};

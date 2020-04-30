### POST ... React-Redux flow:

## building State Management with Redux:

## Steps:

- Design the Store
- Define the Actions
- Create a Reducer
- Set up the Store

---

# Example in the Dev-connector App:

# Reducer folder:

### index.js:

    import { combineReducers } from 'redux';
    import post from './post';

    export default combineReducers({
      post,
    });

### post.js

```import { GET_POSTS, POST_ERROR } from '../actions/types';
const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
      ...state,
      posts: payload,
      loading: false,
      };
    case POST_ERROR:
      return {
      ...state,
      error: payload,
      loading: false,
      };
    default:
      return state;
  }
}
```

# Actions folder:

### types.js

    export const GET_POSTS = 'GET_POSTS';
    export const POST_ERROR = 'POST_ERROR';

### post.js

```import axios from 'axios';
import { setAlert } from './alert';
import { GET_POSTS, POST_ERROR } from './types';

// Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/posts');
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
```

# Components folder:

. Create sub-folder called **posts**:

### Posts.js

```import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPosts } from '../../actions/post';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div>
      <h1>POSTS</h1>
    </div>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
```

form the sub-folder **layout**:

## navbar.js

add Posts to the menu :

```<li>
<Link to='/posts'>Posts</Link>
</li>
```

# SRC folder:

App.js

add new protected route

```
<PrivateRoute exact path='/posts' component={Posts} />
```

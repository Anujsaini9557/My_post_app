import { createContext, useReducer } from "react";
// import PostList from '../components/CreatePost';

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
});
 
const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if(action.type === "DELETE_POST"){
        newPostList = currPostList.filter(
            (post) => post.id !== action.payload.postId
        );
    }
    return newPostList;
};
const PostListProvider = ({children}) => {
    const [postList, dispatchPostList] = useReducer(
        postListReducer, DEFAULT_POST_LIST);
       

const addPost = () => {};

const deletePost = (postId) => {
dispatchPostList(
    {
        type:"DELETE_POST",
        payload:{
            postId,
        },
    });
};

return(
     <PostList.Provider value={{postList, addPost, deletePost }}>
{children}
</PostList.Provider>
);
};

const DEFAULT_POST_LIST = [
    {
id : '1',
title: 'Ging to Delhi',
body: 'HI Friends, I am going to Delhi for my vacations. Hope to enjoy a lot.',
reactions:2,
userId:'user-9',
tags:["vacations", "Mumbai","Enjoying"]
},
    {
id : '2',
title: 'Ging to Mumbai',
body: 'Hi friends I am a React developer, trying to enhance my skills in frontend development.',
reactions:6,
userId:'user-4',
tags:["Summer", "Food","Learning"]
},
    {
id : '3',
title: 'Learning React',
body: 'Hi friends I am a React developer, trying to enhance my skills in frontend development.',
reactions:16,
userId:'user-4',
tags:["Laptop", "Intent","Code"]
},

];

export default PostListProvider;
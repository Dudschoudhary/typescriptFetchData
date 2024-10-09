import React from "react";
import PostCard from "../postCard/PostCard";
import { PostProps } from "../types/types";
 async function fetchData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if(!res.ok){
        throw new Error("Faild to fetch Data");
    }
    return res.json();

 }
const PostList =async () =>{
    const data:PostProps[] = await fetchData();
    return(
        <div className="postList">
            {/* <PostCard title="post title" desc="post desc"/>
             */}
             {data.map((post)=>(
                <PostCard key={post.id}{...post}/>
             ))}
        </div>
    )
}

export default PostList;
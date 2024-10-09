import React from "react";
import { PostProps } from "../types/types";

const PostCard = ({title,body}:PostProps) =>{
    return(
        <div className="postCard">
            <h2 className="border text-red-700 font-weight-900">{title}</h2>
            <p>{body}</p>
        </div>
    )
}
export default PostCard;
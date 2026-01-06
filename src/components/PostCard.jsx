import React from "react";
import appwriteService from "../appwrite/config"
import {Link} from "react-router-dom"

function PostCard({$id, title, featuredImage}){

    return(
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-400 rounded-xl p-4">
                <div className="w-full justify-center content-center mb-4">
                    <img src={appwriteService.getFileView(featuredImage)} alt={title} 
                    className="rounded-xl mx-auto"/>
                </div>
                <h2 
                className="text-xl font-bold text-blue-500"
                >
                    {title}
                </h2>
            </div>
        </Link>
    )
}

export default PostCard
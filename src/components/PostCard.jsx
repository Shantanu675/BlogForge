import React from "react";
import appwriteService from "../appwrite/config"
import {Link} from "react-router-dom"

function PostCard({$id, title, featuredImage}){

    return(
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-white rounded-xl p-4 shadow-2xl hover:shadow-slate-950 transition-all duration-300 border border-gray-200 hover:border-blue-500 transform hover:-translate-y-2 group">
                <div className="w-full justify-center content-center mb-4 overflow-hidden rounded-xl">
                    <img src={appwriteService.getFileView(featuredImage)} alt={title} 
                    className="rounded-xl mx-auto"/>
                </div>
                <h2 
                className="text-xl font-bold text-blue-500 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2"
                >
                    {title}
                </h2>
            </div>
        </Link>
    )
}

export default PostCard
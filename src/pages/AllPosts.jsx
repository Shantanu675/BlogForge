import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container } from "../components";
import PostCard from "../components/PostCard";
import Loader from "../components/Loader";

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        appwriteService.getPosts([])
            .then((res) => {
                if (res) setPosts(res.documents);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <Loader />;

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap -mx-2">
                    {posts.map((post) => (
                        <div
                            key={post.$id}
                            className="px-2 mb-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                        >
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;

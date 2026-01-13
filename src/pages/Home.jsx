import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Landing from '../components/LandingPage';

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        appwriteService.getPosts()
            .then((res) => {
                if (res) setPosts(res.documents);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <Loader />;

    if (posts.length === 0) {
        return (
            <div className="text-center">
                <Container>
                    {/* <div className="flex items-center justify-center my-10">
                        <div className="max-w-4xl w-full text-center">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
                                Share Your Thoughts with the World ✍️
                            </h1>

                            <p className="text-gray-600 text-lg md:text-xl mb-8">
                                Create posts, read ideas from others, like ❤️, comment 💬, and manage your content —
                                all powered by <span className="font-semibold">Appwrite Authentication</span>.
                            </p>

                            <div className="flex justify-center gap-4">
                                <button 
                                    onClick={() => navigate("/login")}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-500 duration-200"
                                >
                                    Get Started
                                </button>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-xl font-semibold text-gray-500">
                                    🔐 Login to read posts and interact with the community 🔐
                                </h2>
                            </div>
                        </div>
                    </div> */}
                    <Landing/>
                </Container>
            </div>
        )
    }

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

export default Home;

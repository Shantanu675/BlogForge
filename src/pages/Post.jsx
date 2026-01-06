import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container, Comments } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";

export default function Post() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (!slug) {
            navigate("/");
            return;
        }

        appwriteService.getPost(slug)
            .then((res) => {
                if (res) setPost(res);
                else navigate("/");
            })
            .finally(() => setLoading(false));

    }, [slug, navigate]);

    const deletePost = async () => {
        const status = await appwriteService.deletePost(post.$id);
        if (status) {
            await appwriteService.deleteFile(post.featuredImage);
            navigate("/");
        }
    };

    if (loading) return <Loader />;

    return (
        <div className="py-8">
            <Container>
                {/* Featured Image */}
                <div className="w-full flex justify-center mb-4 relative rounded-xl p-2">
                    <img
                        src={appwriteService.getFileView(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                {/* Title */}
                <div className="w-full mb-6">
                    <h1 className="text-4xl font-bold text-black">
                        {post.title}
                    </h1>
                </div>

                {/* Content */}
                <div className="browser-css text-xl text-gray-900">
                    {parse(post.content)}
                </div>

                {/* Meta Info */}
                <div className="flex justify-between items-start m-10">
                    <div className="text-red-500 font-extrabold text-center">
                        <div className="text-3xl">♡</div>
                        <div className="text-sm">{post.likes}</div>
                    </div>

                    <div className="text-blue-500 font-extrabold text-right">
                        <div>{post.generatorName}</div>
                        <div>#{post.generatorMail}</div>
                    </div>
                </div>

                {/* Comments */}
                <Comments />
            </Container>
        </div>
    );
}

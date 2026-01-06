import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from 'react-router-dom';
import Loader from "../components/Loader";

function EditPost() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!slug) {
            navigate('/');
            return;
        }

        appwriteService.getPost(slug)
            .then((res) => {
                if (res) setPost(res);
            })
            .finally(() => setLoading(false));

    }, [slug, navigate]);

    if (loading) return <Loader />;

    return (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    );
}

export default EditPost;

import BlogMain from '@/components/blog-inner-pages/blog/BlogMain';
import Wrapper from '@/layout/DefaultWrapper';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Blogs By Reliable College",
};

const Blog = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <BlogMain />
                </main>
            </Wrapper>
        </>
    );
};

export default Blog;
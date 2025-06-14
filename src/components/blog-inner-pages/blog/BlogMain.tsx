"use client"
import Breadcrumbs from '@/components/common/Breadcrumb/Breadcrumbs';
import BasicPagination from '@/components/elements/pagination/BasicPagination';
import React from 'react';
import BlogSidebar from '@/components/common/blog/BlogSidebar';
import blogData from '@/data/blog-data';
import Link from 'next/link';
import Image from 'next/image';

const BlogMain = () => {
    return (
        <>
            <Breadcrumbs breadcrumbTitle='Blog Standard' />
            {/* -- blog area start -- */}
            <section className="bd-blog-area section-space">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-xxl-8 col-lg-8">
                            <div className="row gy-30">
                                {blogData.slice(16, 22).map((blog, index) => (
                                    <div className="col-xl-12 col-lg-12 col-md-12" key={index}>
                                        <article className={`${blog.boxShadowClass == true ? "bd-blog bd-blog-wrapper blog-standard" : "post-details-blockquote"} `}>
                                            {blog.type === 'image' && (
                                                <div className="bd-blog-thumb">
                                                    <Link href={`/blog/blog-details/${blog.id}`}>{blog?.image && <Image src={blog.image} style={{width:"100%", height:"auto"}} alt="image" />}</Link>
                                                </div>
                                            )}
                                            {
                                                blog.buttonShow == true &&
                                                <div className="bd-blog-content">
                                                    <h3 className="bd-blog-title mb-15 underline">

                                                        {
                                                            blog?.buttonLink == true ?
                                                                <>
                                                                    <Link href="/blog/blog-details">{blog.title}</Link>
                                                                </>
                                                                :
                                                                <>
                                                                    {
                                                                        blog.daynamicLink == true &&
                                                                        <Link href={`/blog/blog-details/${blog.id}`}>{blog.title}</Link>
                                                                    }
                                                                </>
                                                        }
                                                    </h3>
                                                    <p>{blog.description}</p>
                                                    
                                                </div>
                                            }
                                        </article>
                                    </div>
                                ))}
                            </div>
                            {/* -- pagination style -- */}
                            <BasicPagination />
                            {/* -- pagination style end -- */}
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-xxl-4 col-lg-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </section>
            {/* -- blog area end -- */}
        </>
    );
};

export default BlogMain;
"use client"
import BlogSidebar from '@/components/common/blog/BlogSidebar';
import blogData from '@/data/blog-data';
import React from 'react';
import BlogBreadcrumb from './BlogBreadcrumb';
import PostboxContent from './PostboxContent';
import Image from 'next/image';
import PostboxAuthor from './PostboxAuthor';
const BlogDetailsMain = ({ blogId }: { blogId: number }) => {
  const blog = blogData.find((item) => item.id == blogId);

  return (
    <>
      <BlogBreadcrumb blog={blog} />

      {/* -- postbox area start -- */}
      <section className="bd-postbox-area section-space">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-xxl-8 col-lg-8">
              <div className="bd-postbox-wrapper">
                <div className="bd-blog-feature-thumb">
                  {blog?.image && (
                    <Image
                      src={blog?.image}
                      style={{ width: "100%", height: "auto" }}
                      alt="blog feature image"
                    />
                  )}
                </div>

                <PostboxContent />

                

                <PostboxAuthor />
              </div>
            </div>

            <div className="col-xxl-4 col-xl-4 col-xxl-4 col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
      {/* -- postbox area end -- */}

      {/* -- similar articles area start -- */}
    
    
    </>
  );
};

export default BlogDetailsMain;

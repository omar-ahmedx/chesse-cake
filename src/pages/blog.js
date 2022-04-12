import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import * as container from "../styles/container.module.css";
import * as blogStyle from "../styles/blog.module.css";

function Blogs() {
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    fetch(
      "https://api.factmaven.com/xml-to-json/?xml=https://medium.com/feed/@Cheesecake_Agency",
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.rss.channel);
        setBlogs(data.rss.channel);
      });
  }, []);
  console.log(blogs);

  return (
    <Layout>
      <section className={container.container_blog}>
        <div className={blogStyle.blog_wrapper}>
          {blogs
            ? blogs.item.map((blog, index) => (
                <a className={blogStyle.links} href={blog.link}>
                  <div key={index}>
                    <div>
                      <h2>{blog.title}</h2>
                      {/*<h3>{blog.creator}</h3>*/}
                    </div>
                    <div>
                      <img
                        className={blogStyle.blog_image}
                        alt="blog img"
                        src={`${
                          blog.encoded.match(
                            /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})\.(?:jpg|gif|png)/g
                          )[0]
                        }`}
                      />
                    </div>
                  </div>
                </a>
              ))
            : "Loading blogs..."}
        </div>
      </section>
    </Layout>
  );
}

export default Blogs;

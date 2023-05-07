import React from 'react';
import s from './Blog.module.css'

const Blog = () => {
    return (
        <div className={s.blogOverlay}>
            <div className={s.blogMenu}>
                <div>
                    <button>Create article</button>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="search"
                    />
                </div>
            </div>
            <article>

                <h2>Some Header</h2>
            </article>
        </div>
    );
};

export default Blog;
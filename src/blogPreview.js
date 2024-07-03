const BlogPreview=({blogs,title})=>{



    return(
    <div className="blogsList">
        
    <h1>{title}</h1>
       
    {blogs.map(blog=>{
        return (
        <div className="blogPreview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by: {blog.author}</p>
        </div>
        )
    })}
    </div>
    )
    }
    export default BlogPreview
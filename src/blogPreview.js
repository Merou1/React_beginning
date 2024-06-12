const BlogPreview=(props)=>{

    const blogs=props.blogs
    console.log(props)
return(
<div className="blogsList">
    
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
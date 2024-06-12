import { useState } from "react"
import BlogPreview from "./blogPreview"
const Home = () => {
    let [name,setName]=useState('Merouane')
    let [age,setAge]=useState("21")

    const [blogs,setBlogs]=useState(
        [
            { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
            { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
            { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
          ]
    )

    const handleClick=()=>{
        setName("Merou1")
        setAge("25")
    }
    const hadleClickAgain=(name,e)=>{
        console.log("hello "+name,"target: "+e.target)
    }
    return ( 
        <div className="home">
        <h2>Home page</h2>
        <p>{name} is {age} years old</p>
        <button onClick={handleClick}>Click me</button>
        <button onClick={(e)=>{
            hadleClickAgain("Merouane",e)
        }}>Click me again</button>
    <div className="blog">
        {
         <BlogPreview blogs={blogs} />
        }
        </div>

        </div>

     );
}
 
export default Home;
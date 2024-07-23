import "./BlogView.css"
import { useParams } from "react-router-dom"
import blogs from "../../data"

function BlogView() {
    const {id} = useParams()

    const selectedBlog = blogs.find((blogObject)=> blogObject.id === id
    )
    console.log(selectedBlog);
  return (
        <div className="BlogView-cards">   
            <h1>{selectedBlog.title}</h1>
            <p className="BlogView-author-details">
                <img src={selectedBlog.author.avtar} alt="avtar" height="90px" className="BlogView-avtar"/>
                {selectedBlog.author.name} | {selectedBlog.date}
            </p>
            {selectedBlog.content}
        </div>

    )
}

export default BlogView
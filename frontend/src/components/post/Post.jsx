import "./post.css"
import Moment from "moment";

export default function Post() {
    const formatDate = Moment().format("MMM Do YY")
  return (
    <div className="post">
        <img
          className="postImg"
          src=""
          alt=""
          />
          <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Post Title</span>
            <hr/>
            <span className="postDate">{formatDate}</span>
          </div> 
          <p className="postDesc">

          </p>

    </div>
  )
}

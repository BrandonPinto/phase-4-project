import "./singlePost.css"
import Moment from 'moment'



export default function SinglePost() {
    const formatDate = Moment().format("MMM Do YY")
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="" 
            alt="" 
            className="singlePostImg"/>
            <h1 className="singlePostTitle">
                Lorem ipsum, dolor sit amet 
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Brandon</b></span>
                <span className="singlePostDate">{formatDate}</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ab nemo impedit, adipisci repellendus, 
                repellat, libero enim excepturi unde saepe corporis ea fuga itaque magni quisquam velit quasi! Impedit, quod!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis explicabo mollitia ducimus, 
                tempora a quasi, earum accusamus libero commodi ipsum modi sint iusto corporis ad labore ab et quibusdam at.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi debitis vero repellendus in neque nihil atque quae delectus minus facere ipsam ratione 
                consequatur molestiae perferendis soluta dicta,voluptatibus aliquam dolorum.</p>
        </div>
    </div>
  )
}

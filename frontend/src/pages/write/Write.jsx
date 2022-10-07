import { useState } from "react"
import "./write.css"

export default function Write() {


const [postData, setPostData] = useState({
  title: "",
  content: "",
  link: ""
})

const formChange = (e) => {
  setPostData({
    ...postData,
    [e.target.name]: e.target.value
  })
}

const handleSubmit =  (e) => {
  e.preventDefault()
  let token = localStorage.getItem('jwt')
console.log(postData)
  const createPost =  async () => {
    let req = await fetch('http://localhost:3000/write', {
      method: "POST",
      headers: {
        "token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: postData.title,
        content: postData.content,
        link: postData.link,
      })
    })
    let res = await req.json()
    console.log(res)
  }
  createPost()
}

  return (
    <div className="write">
        <img src="https://cdn.fstoppers.com/styles/full/s3/media/2021/06/04/dsc_5515-pano-2jj.jpg" alt="" className="writeImg" />
        <form onSubmit={handleSubmit}className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}}/>
                <input name="title" onChange={formChange}type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                <input name="link" onChange={formChange}type="text" placeholder="Link" className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea name="content" onChange={formChange}placeholder="Tell your story..." 
                type="text" 
                className="writeInput writeText">
                </textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>

    </div>
  )
}
        

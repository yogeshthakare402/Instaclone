import React, {useState } from 'react';
import './PostviewPage.css';

function PostviewPage() {
    const [userData, setUserData] = useState({
        "postImage": "",
        "authorName": "",
        "authorLocation": "",
        "description": "",
        "likes": 69,
        "date": new Date()
    })
    
    
    // console.log(userData)
    const postUserData = async(e) => {
        e.preventDefault();
        console.log(userData)
        // adding data in form data
        // let formData = new FormData(e.target);
        // formData.append("likes","69")
        // formData.append("date", `${new Date()}`)
        // console.log(Object.fromEntries(formData))
const {postImage,authorName, authorLocation,description,likes, date} = userData;
        await fetch("/posts",{
            method : 'POST',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                postImage,authorName, authorLocation,description,likes, date
            })
        }).then(result=>console.log(result, "Succefully posted"));
    
    }
    
    const onChangeFile = (e)=> {
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setUserData({ ...userData, [e.target.name]: reader.result})
        }
        // userData.postImage = e.target.files[0]
    }

    const onChangeData = (e)=>{
        setUserData({ ...userData, [e.target.name]: e.target.value})
    }

  return (
    <div className='mainPostview'>
        <h2>PostviewPage</h2>
        <div className='postviewPage'>
        <form className='postform' action='POST' onSubmit={postUserData}>
            <input type='file' 
            name='postImage' 
            onChange={onChangeFile}/>
            <div className='authInput'>
                <input type='text' 
                name='authorName' 
                placeholder='Author'
                value={userData.authorName}
                onChange={onChangeData}/>
                <input type='text' 
                name='authorLocation' 
                placeholder='Location'
                value={userData.authorLocation}
                onChange={onChangeData}/>
            </div>
            <div>
                <input type='text' 
                name='description' 
                placeholder='Description'
                value={userData.description}
                onChange={onChangeData}/>
            </div>
            <button type='Submit' className='postbtn'>Post</button>
        </form>
        </div>
        
    </div>
    
  )
}

export default PostviewPage




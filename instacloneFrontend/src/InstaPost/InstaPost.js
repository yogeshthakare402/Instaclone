import React,{useEffect, useState} from 'react';
import PostviewPage from '../PostviewPage/PostviewPage';
import './InstaPost.css';


function InstaPost() {
    const [showPostPage, setSHowPostPage] = useState(false);
    const[authorData, setAuthorData] = useState({
        posts:[]
    });
    const [isClick, setClick] = useState(0);
    
    const onCameraClick = () => {
        setSHowPostPage(true);
    }
    const onLogoClick = async() => {
        setSHowPostPage(false);
        
    }

    const getUserData = async()=>{
        await fetch("/posts",{
            method : 'GET',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json())
        .then(result=>setAuthorData(result));

        console.log(authorData.posts)
    }

    useEffect(()=>{
        getUserData()
    },[])

    return (
        <div>
            <header className='instaHeader'>
                <div className='logo'>
                    <img src="../images/logoImage.jpeg" alt="logoImage" className='logoImage' onClick={onLogoClick}/>
                    <p className='logoName'>InstaClone</p>
                </div>

                <img src="../images/camera.jpeg" 
                alt="camera" 
                className='camera' 
                onClick={onCameraClick}/>
            </header>
            {showPostPage && 
            <PostviewPage/>}
            {!showPostPage &&
                <div className='posts'>
                    {authorData.posts.map((data, index) => {
                        return (
                            <div key={index} className='imagepost'>
                                <div className='headingDot'>
                                <h3>{data.authorName}</h3>
                                <p className='dots'>...</p>
                                </div>
                                <p>{data.authorLocation}</p>
                                <img src={data.postImage} alt="authorImage"/>
                                <div className='likes'>
                                    <div className='likebtn'>
                                    <button className='heart-shape' 
                                    onClick={
                                        ()=>{
                                            setClick(isClick + 1)
                                        }
                                    }
                                    ></button>
                                    <p>{isClick}</p>
                                    </div>
                                    
                                    <p className='date'>{data.createdAt.split("T")[0]}</p>
                                </div>
                                <h3 className='desc'>{data.description}</h3>
                            </div>
                        )
                    })}
                </div>
            }
            
            
        </div>
    )
}

export default InstaPost







// {
//     posts : [
//         {
//             "_id": "6377c660edaacef160f96269",
//             "postImage": "http://res.cloudinary.com/dcip3zcp4/image/upload/v1668803687/t0zvxa91s3fqskwme9k8.jpg",
//             "authorName": "Subhash Das",
//             "authorLocation": "Mumbai",
//             "description": "I am from mumbai",
//             "likes":50,
//             "createdAt": "2022-11-18T17:52:32.622Z",
//             "updatedAt": "2022-11-18T17:52:32.622Z",
//             "__v": 0
//         },
//         {
//             "_id": "6377c7b47acd2a07836f36b8",
//             "postImage": "http://res.cloudinary.com/dcip3zcp4/image/upload/v1668803687/t0zvxa91s3fqskwme9k8.jpg",
//             "authorName": "Subhash Das",
//             "authorLocation": "Mumbai",
//             "description": "I am from mumbai",
//             "likes":60,
//             "createdAt": "2022-11-18T17:58:12.953Z",
//             "updatedAt": "2022-11-18T17:58:12.953Z",
//             "__v": 0
//         },
//         {
//             "_id": "6377e2c16e20b14a4ace6ce1",
//             "postImage": "http://res.cloudinary.com/dcip3zcp4/image/upload/v1668803687/t0zvxa91s3fqskwme9k8.jpg",
//             "authorName": "Subhash Das",
//             "authorLocation": "Mumbai",
//             "description": "I am from mumbai",
//             "likes":100,
//             "createdAt": "2022-11-18T19:53:37.793Z",
//             "updatedAt": "2022-11-18T19:53:37.793Z",
//             "__v": 0
//         }
//     ]
// }
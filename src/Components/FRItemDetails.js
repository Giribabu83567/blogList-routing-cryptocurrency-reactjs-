import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import '../index.css'
import './FetchRouting.css'

const BlogItemDetails = ()=> {
    const {id} = useParams();
    const [blogItemData, setBlogItemData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        getBlogItemData();
    }, [])
   
   const getBlogItemData = async ()=> {
        try{
            const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
            const data = await response.json();
            setBlogItemData(data)
            setLoading(false)
        }
        catch(error){
            console.log('Error fetching blog item data :', error)
        }    
    }

    const navigate = useNavigate()
    const handleGoBack = ()=> {
        navigate(-1)
    }


    return(
        <div> {loading? <div className="spinner-border"></div> : 
            <div className="d-flex flex-column align-items-center mt-5">
                <h2>{blogItemData.title}</h2>
                <div className="d-flex align-items-center">
                    <img src={blogItemData.avatar_url} className="author-image"></img>
                    <p>{blogItemData.author}</p>
                </div>
                <div>
                    <img src={blogItemData.image_url} className="react-image"></img>
                </div>
                <p className="blog-content">{blogItemData.content}</p>
                <button onClick={handleGoBack} className="btn btn-primary">Go Back</button>
            </div>
            }
        </div>
    )
}

export default BlogItemDetails;
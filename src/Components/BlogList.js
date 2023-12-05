import {v4 as uuid} from 'uuid'
import { useState } from 'react';
import './BlogList.css'

const initialBlogLists = [
    {
        id: uuid(),
        title: 'My first post',
        description: 'A high quality solution beautifully designed for Startups',
        publishedDate: 'Aug 2nd'
    },
    {
        id: uuid(),
        title: 'My second post',
        description: 'A high quality solution beautifully designed for Startups and business schools',
        publishedDate: 'Mar 1st'
    },
    {
        id: uuid(),
        title: 'My third post',
        description: 'A high quality solution beautifully designed for Startups',
        publishedDate: 'Jan 2nd'
    },
    {
        id: uuid(),
        title: 'My fourth post',
        description: 'A high quality solution beautifully designed for Startups and Business schools',
        publishedDate: 'Dec 24th'
    },
    {
        id: uuid(),
        title: 'My fifth post',
        description: 'A high quality solution beautifully designed for Startups',
        publishedDate: 'Nov 10th'
    }
];

const BlogList = ()=> {

    const [blogLists, setBlogLists] = useState(initialBlogLists);
    


    return(
        <div>
            <div className='d-flex flex-column align-items-center m-5'>
                <img src='https://assets.ccbp.in/frontend/react-js/profile-img.png' alt='profile' className='profile-image'></img>
                <h5>Wade Warren</h5>
                <p>Software Developer at UK</p>
            </div>

            <div className='d-flex flex-column align-items-center'>
                {
                   blogLists.map((eachBlog) => (
                    <div className='blog-list-container'>
                        <div className='d-flex justify-content-between'>
                            <h5 className='blog-title'>{eachBlog.title}</h5>
                            <p className='blog-text'>{eachBlog.publishedDate}</p>
                        </div>
                        <div>
                            <p className='blog-text'>{eachBlog.description}</p>
                        </div>
                    </div>
                   )) 
                }
            </div>
        </div>
    )
}

export default BlogList;
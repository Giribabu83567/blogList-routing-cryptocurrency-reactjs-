import '../index.css';
import './FetchRouting.css'
import {Link} from 'react-router-dom'

const BlogItems = (props)=> {

    const {BlogData} = props;
    const {id, title, topic, image_url, avatar_url, author} = BlogData


    return(
        <Link to={`/blogs/${id}`} className='blog-item-container'>
            <div className="card d-flex flex-row p-3 m-3">
                <div>
                    <img src={image_url} className="react-image"></img>
                </div>
                <div className='blog-item-details'>
                    <p>{topic}</p>
                    <h6>{title}</h6>
                    <div className='d-flex align-items-center'>
                        <img src={avatar_url} className='author-image'></img>
                        <p>{author}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default BlogItems;
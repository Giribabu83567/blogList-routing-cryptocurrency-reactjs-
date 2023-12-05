import { useEffect, useState } from "react";
import BlogItems from "./FetchRoutingItem";

const FetchRouting = ()=> {

    const [isLoading, setIsLoading] = useState(true);
    const [blogsList, setBlogsList] = useState([]);

    useEffect(() => {
        getBlogsData()
    }, [])

    const getBlogsData = async ()=> {
        try{
            const options = {
                method: "GET"
            }
            const response = await fetch("https://apis.ccbp.in/blogs", options);
            const data = await response.json();
            setBlogsList(data)
            setIsLoading(false)
        }
        catch(error){
            console.log(error, 'data fetching error')
        }
    }
    
    //console.log(blogsList)

    return(
        <div>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                <img className="rounded-circle"
                    src="https://m.cricbuzz.com/a/img/v1/192x192/i1/c352454/glenn-maxwell.jpg" alt="glenn maxwell">
                </img>
                <h4>Glenn James Maxwell</h4>
                <p>Australian Cricketer</p>
            </div>
            <div className="p-5">
                {isLoading? <div class="spinner-border"></div> : 
                    (
                        blogsList.map((eachBlog) => (
                            <BlogItems BlogData={eachBlog} key={eachBlog.id}/>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default FetchRouting;
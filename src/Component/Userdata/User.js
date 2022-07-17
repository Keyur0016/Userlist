import React, { useEffect, useState } from 'react' ; 
import InfiniteScroll from 'react-infinite-scroller';
import './User.css' ; 


export default function () {

    const [userdata, userdataUpdate] = useState([]) ; 
    
    useEffect(() => {

        const FetchData = async () => {

            // Fetch UserData 

            const RequestURL = 'https://randomuser.me/api?results=50' ; 
            const RequestOption = {
                method : 'GET' 
            }

            const Request = await fetch(RequestURL, RequestOption) ; 
            const Request_response = await Request.json() ; 
            const Response_results_data = Request_response.results ;
            userdataUpdate(Response_results_data) ; 

        }

        FetchData() ; 
        
    }, []) ; 
    
    const loadMoreData = async () => {

        const FetchData = async () => {

            // Fetch UserData 

            const RequestURL = 'https://randomuser.me/api?results=50' ; 
            const RequestOption = {
                method : 'GET' 
            }

            const Request = await fetch(RequestURL, RequestOption) ; 
            const Request_response = await Request.json() ; 
            const Response_results_data = Request_response.results ;
            userdataUpdate(userdata.concat(Response_results_data)) ; 

        }

        FetchData() ; 
         
    }

    return (
    <div className='UserDivision'>
        <div className='UserListData'>

        <InfiniteScroll
            pageStart={0}
            loadMore={loadMoreData}
            hasMore={true || false}
            loader={<div className="d-flex justify-content-center SpinnerDiv">
                        <div className="spinner-border" role="status"></div>
                    </div>}
            >
        
            {userdata.map((element, index) => {
                
                return (
                        
                        // Particular userlist division 

                        <div className='UserList' key={index}>

                            {/* Userimage division  */}

                            <div className='UserImageDiv'>
                                <img src={element.picture.medium} className='UserImage'/>
                            </div>

                            {/* Username and Usercontact information division  */}
                            
                            <div className='UserNameContact'>
                                <h5 className="card-title UserName">{element.name.title} {element.name.first} {element.name.last}</h5>
                                <p className="card-text UserContact">Contact - {element.phone}</p>
                            </div>
            
                        </div>
                    
                )

            })}

        </InfiniteScroll>
       
        </div>
    </div>
  )
}

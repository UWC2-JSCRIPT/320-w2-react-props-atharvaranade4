import React from 'react';
import PropTypes from 'prop-types';


function ArticleDetails({ authorImage, authorName, postedDate, minutesToRead }){
    function formatDate(date){
        return new Date(date).toLocaleDateString(
            'en-US',
            {
                month: 'short', day: 'numeric'
            }
        )
    }

    return (
        <div className='article-details'>
            <div class="author-image-container">
                <img className='author-image' src={authorImage} alt={authorImage}/>
            </div>
            <div className = 'detail-info'>
                <h3>{ authorName }</h3>
                <div>
                    <p>{ formatDate(postedDate)}</p>
                    <p>{ minutesToRead }</p>
                </div>
            </div>
        </div>
    )
}

export default ArticleDetails

ArticleDetails.propTypes = {
    authorImage: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    postedDate: PropTypes.string.isRequired, //check type
    minutesToRead: PropTypes.string.isRequired
}
import React from 'react';
import PropTypes from 'prop-types';

// Format date
function formatDate(date){
    return new Date(date).toLocaleDateString(
        'en-US',
        {
            month: 'short', day: 'numeric'
        }
    )
}

function ArticleDetails({ authorImage, authorName, postedDate, minutesToRead }){

    return (
        <div className='article-details'>
            <div className="author-image-container">
                <img className='author-image' src={authorImage} alt={authorImage}/>
            </div>
            <div className = 'detail-info'>
                <div>{ authorName }</div>
                <div className='info-container'>
                    <div className='date-minute-container'>
                        <p>{ formatDate(postedDate)} •</p>
                        <p> { minutesToRead } min read</p>
                    </div>
                    <img className='article-bookmark' src='https://cdn-icons-png.flaticon.com/512/494/494568.png' alt='bookmark'/>
                </div>
            </div>
        </div>
    )
}

export default ArticleDetails

ArticleDetails.propTypes = {
    authorImage: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    postedDate: PropTypes.string.isRequired,
    minutesToRead: PropTypes.number.isRequired
}
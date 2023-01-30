import React from 'react';
import PropTypes from 'prop-types';


function ArticleBody({ title, description }){
    return (
        <div className='article-body'>
            <h3 className='article-body-title'>{title}</h3>
            <p className='article-body-description'>{description}</p>
        </div>

    )
}

export default ArticleBody

ArticleBody.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
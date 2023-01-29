import React from 'react';
import PropTypes from 'prop-types';


function ArticleBody({ title, description }){
    return (
        <div className='article-body'>
            <h2 className='article-body-title'>{title}</h2>
            <h2 className='article-body-description'>{description}</h2>
        </div>

    )
}

export default ArticleBody

ArticleBody.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
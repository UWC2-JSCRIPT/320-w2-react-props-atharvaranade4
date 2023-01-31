import React from 'react';
import PropTypes from 'prop-types';

function ArticleImage({ image, altDescription }){
    return (
        <div className='article-image-container'>
            <img className = 'article-image' src={image} alt={altDescription}/>
        </div>

    )
}

export default ArticleImage

ArticleImage.propTypes = {
    image: PropTypes.string.isRequired,
    altDescription: PropTypes.string.isRequired
}
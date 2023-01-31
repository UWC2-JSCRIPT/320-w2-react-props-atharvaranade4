import React from 'react';
import PropTypes from 'prop-types';


function ArticleBody({ title, description, hasAudioAvailable, memberPreview }){
    return (
        <div className='article-body'>
            {(hasAudioAvailable)?<p className='audio-available'>Audio Available</p>: null}
            {(memberPreview)?<div className='member-preview'> ★ Member Preview</div>: null}
            <h3 className='article-body-title'>{title}</h3>
            <p className='article-body-description'>{description}</p>
        </div>

    )
}

export default ArticleBody

ArticleBody.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    hasAudioAvailable: PropTypes.bool.isRequired
}
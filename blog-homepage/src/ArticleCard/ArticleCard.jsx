import React from 'react';
import PropTypes from 'prop-types';
import ArticleImage from './ArticleImage';
import ArticleBody from './ArticleBody';
import ArticleDetails from './ArticleDetails';

function ArticleCard ({article}){
    const {title, description, author, postedDate, minutesToRead} = article
    const {name, image } = author;
    return (
        <div className='article-card'>
            <ArticleImage
            image={image}
            altDescription={title}
            />
            <ArticleBody
            title={title}
            description={description}
            />
            <ArticleDetails
            authorImage={image}
            authorName={name}
            postedDate={postedDate}
            minutesToRead={minutesToRead}
            />
        </div>
    )
}

export default ArticleCard

// const author = {name: 'John', image: "afjf"}
// const { name, image } = author
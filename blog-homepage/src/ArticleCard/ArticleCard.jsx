import React from 'react';
import ArticleImage from './ArticleImage';
import ArticleBody from './ArticleBody';
import ArticleDetails from './ArticleDetails';

function ArticleCard ({ article, articleType }){
    // console.log(article)
    const {title, description, image, author, postedDate, minutesToRead, hasAudioAvailable, link, memberPreview } = article
    // const {name, image} = author
        
    return (
        // BONUS
        <a href={link}>
            <div className={`article-card-${articleType}`}>
                <ArticleImage
                image={image}
                altDescription={title}
                />
                <div class='article-text'>
                    <ArticleBody
                    title={title}
                    description={description}
                    hasAudioAvailable={hasAudioAvailable}
                    memberPreview={memberPreview}
                    
                    />
                    <ArticleDetails
                    authorImage={author.image}
                    authorName={author.name}
                    postedDate={postedDate}
                    minutesToRead={minutesToRead}
                    />
                </div>
            </div>
        </a>
    )
}

export default ArticleCard

// const author = {name: 'John', image: "afjf"}
// const { name, image } = author
//         John, afjf
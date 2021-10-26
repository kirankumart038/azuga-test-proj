import React, { useEffect, useState } from 'react';
import { getArticlesData } from '../data/dataHandler';
import { useParams } from 'react-router-dom';
function ArticleData( props ) {
    const { articleId } = useParams();
    const [articleData, setArticleData] = useState( null );
    useEffect( () => {
        getArticlesData( articleId )
            .then( dataObj => {
                console.log( dataObj )
                if ( dataObj.hasData ) {
                    setArticleData( dataObj.data )
                }

            } )
    } )
    if ( null === articleData ) {
        return <h3>No Data Found</h3>
    }
    return (
        <div>
            <p>
                { articleData.content }
            </p>
        </div>
    )
}

export default ArticleData;
import React, { useState } from 'react';
import { getUsersArticlesData } from '../data/dataHandler';
import ArticlesList from './ArticlesList';

function Articles( props ) {

    const [author, setAuthor] = useState( '' );
    const [isFetchBtnDisabled, setFetchBtnDisabled] = useState( true )
    const [articles, setArticles] = useState( null );
    let articlesList = null;
    const handleInputChange = ( e ) => {
        if ( e.target.value !== '' ) {
            setFetchBtnDisabled( false );
        } else {
            setFetchBtnDisabled( true )
        }
        setAuthor( e.target.value );
    }

    const handleDataFetch = ( e ) => {
        setFetchBtnDisabled( true )
        getUsersArticlesData( author ).then( dataObj => {
            setFetchBtnDisabled( false );
            if ( dataObj.hasData ) {
                setArticles( dataObj.data )
            } else {
                setArticles( [] )
            }
        } )
    }

    const handleUpvoteSort = ( e ) => {
        const sortedArticles = [...articles]
        sortedArticles.sort( ( article, nextArticle ) => {
            return nextArticle.upvotes - article.upvotes;
        } )
        setArticles( sortedArticles );
    }

    const handleDateSort = ( e ) => {
        const sortedArticles = [...articles]
        sortedArticles.sort( ( article, nextArticle ) => {
            let firstDate = new Date( article.date ).getTime();
            let secondDate = new Date( nextArticle.date ).getTime();
            return secondDate - firstDate;
        } )
        console.log( sortedArticles )

        setArticles( sortedArticles );
    }
    if ( null !== articles && articles.length === 0 ) {
        articlesList = <h3>No Results Found</h3>
    } else if ( null !== articles && articles.length > 0 ) {
        articlesList = <ArticlesList articles={ articles } handleUpvoteSort={ handleUpvoteSort } handleDateSort={ handleDateSort } />
    }
    return (
        <div>
            <h2>Enter Author Name to fetch the articles</h2>
            <div>
                <input type="text" name="author" value={ author } onChange={ handleInputChange }></input>
                <button disabled={ isFetchBtnDisabled } type="button" onClick={ handleDataFetch }>Fetch</button>
            </div>
            <div>
                {
                    ( null !== articles ) ? articlesList : <div></div>
                }
            </div>
        </div>
    )
}

export default Articles;
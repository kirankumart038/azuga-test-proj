import React from 'react';
import './Article.css'
import { Link } from 'react-router-dom';
function ArticlesList( { articles, handleUpvoteSort, handleDateSort } ) {

    return (
        <div>
            <button type="button" onClick={ handleUpvoteSort }>Top</button>
            <button type="button" onClick={ handleDateSort }>Newest</button>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Upvotes</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        articles.map( article => {
                            return (
                                <tr className="article" key={ article.articleId }>
                                    <td><Link to={ `/article/details/${ article.articleId }` }>{ article.title }</Link></td>
                                    <td>{ article.upvotes }</td>
                                    <td>{ article.date }</td>
                                </tr>
                            )
                        } )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ArticlesList;
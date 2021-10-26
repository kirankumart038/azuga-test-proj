import { allUsersArticlesData, allArticleData } from './dummyData';
export function getUsersArticlesData( url ) {
    const userArticleData = allUsersArticlesData[url];
    if ( userArticleData !== undefined && userArticleData.length !== 0 ) {
        return Promise.resolve( {
            hasData: true,
            data: userArticleData

        } )
    } else {
        return Promise.resolve( {
            hasData: false,
        } )
    }
}

export function getArticlesData( url ) {
    const articlesData = allArticleData[url];
    if ( articlesData !== undefined && articlesData.length !== 0 ) {
        return Promise.resolve( {
            hasData: true,
            data: articlesData

        } )
    } else {
        return Promise.resolve( {
            hasData: false
        } )
    }
}

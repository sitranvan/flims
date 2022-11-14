import { category, movieType, tvType } from '../api/flimsApi'

export const cardList = [
    {
        head: {
            title: 'Trending Movies',
            btnTitle: 'View more',
            firstChild: true,
            path: 'movie',
        },
        poster: {
            category: category.movie,
            type: movieType.popular,
        },
    },
    {
        head: {
            title: 'Top Rated Movies',
            btnTitle: 'View more',
            path: 'movie',
        },
        poster: {
            category: category.movie,
            type: movieType.top_rated,
        },
    },
    {
        head: {
            title: 'Trending TV',
            btnTitle: 'View more',
            path: 'tv',
        },
        poster: {
            category: category.tv,
            type: tvType.popular,
        },
    },
    {
        head: {
            title: 'Top Rated TV',
            btnTitle: 'View more',
            path: 'tv',
        },
        poster: {
            category: category.tv,
            type: tvType.top_rated,
        },
    },
]

export const headerNav = [
    {
        display: 'Home',
        path: '/',
    },
    {
        display: 'Movies',
        path: '/movie',
    },
    {
        display: 'TV Series',
        path: '/tv',
    },
]

export const footerMenuList = [
    [
        {
            path: '/',
            title: 'Home',
        },
        {
            path: '/',
            title: 'Contact',
        },
        {
            path: '/',
            title: 'Term of services',
        },
        {
            path: '/',
            title: 'About us',
        },
    ],
    [
        {
            path: '/',
            title: 'FAQ',
        },
        {
            path: '/',
            title: 'Term of services',
        },
        {
            path: '/',
            title: 'Premium',
        },

        {
            path: '/',
            title: '  Pravacy policy',
        },
    ],

    [
        {
            path: '/',
            title: 'You must watch',
        },
        {
            path: '/',
            title: 'Recent release',
        },
        {
            path: '/',
            title: 'Top IMDB',
        },
    ],
]

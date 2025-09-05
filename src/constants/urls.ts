const baseUrl = 'https://jsonplaceholder.typicode.com';

export const urls = {
    users: {
        allUsers: baseUrl + '/users',
        byId: (id: number) => (
            baseUrl + '/users/' + id
        )
    },
    posts: {
        allPosts: baseUrl + '/posts',
        byId: (id: number) => baseUrl + '/posts' + id,
        byUserId: (id: number) => baseUrl + '/posts?userId=' + id,
    },
};

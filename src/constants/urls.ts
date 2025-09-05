const baseUrl = 'https://jsonplaceholder.typicode.com';

export const urls = {
    users: {
        allUsers: baseUrl + '/users',
        byId: (id: number) => (
            baseUrl + '/users/' + id
        )
    },
    posts: {}
};

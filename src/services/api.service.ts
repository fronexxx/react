const baseUrl = 'https://jsonplaceholder.typicode.com';

// export const userService = {
//     getAllUsers: async (): Promise<IUser[]> => {
//         const users = await fetch(baseUrl + '/users')
//             .then((response) => response.json());
//         console.log(users);
//         return users;
//     },
// };
// export const postService = {};
// export const commentService = {};

export const getAll = async <T>(endpoint: string) => {
    const responseResult = await fetch(`${baseUrl}${endpoint}`)
        .then((response) => response.json());
    return responseResult as T;
};

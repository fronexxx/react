import './App.css'
import {useQuery} from "@tanstack/react-query";

function App() {

    const {data: users, isFetching, status} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            return await fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
        },
    });
    if (isFetching) return <div>Loading...</div>
    console.log(users, status)
    return (
        <div>
            {
                users?.map(user => <div key={user.id}>{user.id} --- {user.name}</div>)
            }
        </div>
    );
}

export default App

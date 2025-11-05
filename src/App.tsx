import './App.css'
import {useUsers} from "./api/query/users/useUsers.ts";


function App() {
const { data: users, isFetching, status } = useUsers();

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

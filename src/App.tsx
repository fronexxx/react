import './App.css'
import {useUsers} from "./api/query/users/useUsers.ts";
import {useUser} from "./api/query/users/useUser.ts";


function App() {
const { data: users, isFetching, status } = useUsers();
const { data: user, isFetching: isUserLoading, status: userStatus } = useUser({userId: String(1)});

    console.log(users, status)
    console.log(user, isUserLoading, userStatus)
    if (isFetching) return <div>Loading...</div>
    return (
        <div>
            {
                users?.map(user => <div key={user.id}>{user.id} --- {user.name}</div>)
            }
        </div>
    );
}

export default App

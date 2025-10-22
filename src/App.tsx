import './App.css'
import {useFetch} from "./hooks/useFetch.ts";

function App() {
    const users =
        useFetch<{ id: number, name: string }[]>('https://jsonplaceholder.typicode.com/users');

    return (
        <div>
            {
                users &&
                users.map((user) => (
                    <div key={user.id}>
                        <div>{user.id}: {user.name}</div>
                    </div>
                ))
            }
        </div>
    );
}

export default App

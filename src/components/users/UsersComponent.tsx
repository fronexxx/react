import {useParams} from "react-router-dom";

const UsersComponent = () => {
    const {source} = useParams();

    return (
        <div>
            {
                source === 'jsonplaceholder' && <h1>Users from jsonplaceholder</h1>
            }
            {
                source === 'dummyjson' && <h1>Users from dummyjson</h1>
            }
        </div>
    );
};

export default UsersComponent;

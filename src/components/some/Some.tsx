import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

const Some = () => {
    const [query, setQuery] = useSearchParams();
    useEffect(() => {
        const pg = query.get('pg');
        console.log(pg);
        fetch('https://reqres.in/api/users?page=' + pg, {
            headers: {
                'x-api-key' : 'reqres-free-v1'
            },
        })
            .then((response) => response.json())
            .then((value) => {
                console.log(value);
            });
    }, [query]);
    return (
        <div>

        </div>
    );
};

export default Some;

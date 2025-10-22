import {useEffect, useState} from "react";

export const useFetch = <T>(url: string) => {
    const [obj, setObj] = useState<T>()
    useEffect(() => {

        fetch(url)
            .then((response) => response.json())
            .then((value) => {
                setObj(value);
            });

    }, []);
    return obj;
};


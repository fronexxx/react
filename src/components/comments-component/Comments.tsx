import {useEffect, useState} from "react";
import type {IComment} from "../../model/IComment.ts";
import {getComment} from "../../service/service.api.ts";
import {Comment} from "../comment-component/Comment.tsx";

export const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await getComment();
            setComments(response);
        }
        fetchData();
    }, []);

    return (
        <>
            {
                comments.map((comment) => <Comment comment={comment} key={comment.id}/>)
            }
        </>
    );
};

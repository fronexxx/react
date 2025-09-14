import {useEffect, useState} from "react";
import type {IComment} from "../../models/placeholder-models/IComment.ts";
import {services} from "../../services/service.api.ts";
import CommentPlaceholderComponent from "../comment/CommentPlaceholderComponent.tsx";

const CommentsPlaceholderComponent = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        services.getPlaceholderComments()
            .then(response => setComments(response));
    }, []);
    return (
        <div>
            {
                comments.map(comment => <CommentPlaceholderComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsPlaceholderComponent;

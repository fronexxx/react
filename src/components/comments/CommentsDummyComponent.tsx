import {useEffect, useState} from "react";
import type {ICommentDummy} from "../../models/dummy-models/ICommentDummy.ts";
import {services} from "../../services/service.api.ts";
import CommentDummyComponent from "../comment/CommentDummyComponent.tsx";

const CommentsDummyComponent = () => {
    const [comments, setComments] = useState<ICommentDummy[]>([]);
    useEffect(() => {
        services.getDummyComments()
            .then(response => setComments(response));
    }, []);
    return (
        <div>
            {
                comments.map(comment => <CommentDummyComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsDummyComponent;

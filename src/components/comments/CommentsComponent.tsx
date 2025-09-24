import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {IComment} from "../../models/placeholder-models/IComment.ts";
import type {ICommentDummy} from "../../models/dummy-models/ICommentDummy.ts";
import {services} from "../../services/service.api.ts";
import CommentPlaceholderComponent from "../comment/CommentPlaceholderComponent.tsx";
import CommentDummyComponent from "../comment/CommentDummyComponent.tsx";

const CommentsComponent = () => {
    const {source} = useParams();
    const [comments, setComments] = useState<IComment[]>([]);
    const [dummyComments, setDummyComments] = useState<ICommentDummy[]>([]);
    useEffect(() => {
        if (source === 'jsonplaceholder'){
            services.getPlaceholderComments()
                .then(value => setComments(value));
        }
        else if (source === 'dummyjson'){
            services.getDummyComments()
                .then(value => setDummyComments(value));
        }
    }, [source]);
    return (
        <div>
            {
                source === 'jsonplaceholder' && comments.map(comment => <CommentPlaceholderComponent key={comment.id} comment={comment}/>)
            }
            {
                source === 'dummyjson' && dummyComments.map(dummyComment => <CommentDummyComponent key={dummyComment.id} comment={dummyComment}/>)
            }
        </div>
    );
};

export default CommentsComponent;

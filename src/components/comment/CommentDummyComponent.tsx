import type {ICommentDummy} from "../../models/dummy-models/ICommentDummy.ts";

type CommentDummyComponentPropsType = {
    comment: ICommentDummy
};

const CommentDummyComponent = ({comment}: CommentDummyComponentPropsType) => {
    return (
        <div className="border border-gray-400 rounded-lg p-3 mb-3">
            <h3 className="text-lg font-bold mb-2">{comment.id}</h3>
            <p className="text-sm text-gray-800 mb-2">{comment.body}</p>

            <div className="flex justify-between items-center text-sm text-gray-600">
        <span>
          {comment.user.id}. {comment.user.fullName} ({comment.user.username})
        </span>
                <div className="flex gap-4">
                    <span>Likes: {comment.likes}</span>
                    <span>Post ID: {comment.postId}</span>
                </div>
            </div>
        </div>
    );
};

export default CommentDummyComponent;

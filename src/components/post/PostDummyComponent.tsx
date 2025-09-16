import type {IPostDummy} from "../../models/dummy-models/IPostDummy.ts";

interface PostDummyComponentProps {
    post: IPostDummy
}

const PostDummyComponent = ({post}: PostDummyComponentProps) => {
    return (
        <div className="border border-gray-400 rounded-lg p-4 mb-4">
            <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-700 mb-3">{post.body}</p>

            <div className="mb-2">
                <h3 className="font-medium">Tags:</h3>
                <ul className="flex flex-wrap gap-2 mt-1">
                    {post.tags.map((tag, index) => (
                        <li key={index} className="bg-gray-200 rounded-full px-2 py-1 text-xs font-medium text-gray-700">{tag}</li>
                    ))}
                </ul>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>Likes: {post.reactions.likes}</span>
                <span>Dislikes: {post.reactions.dislikes}</span>
                <span>Views: {post.views}</span>
                <span>UserId: User {post.userId}</span>
                <span>PostId: User {post.id}</span>
            </div>
        </div>
    );
};

export default PostDummyComponent;

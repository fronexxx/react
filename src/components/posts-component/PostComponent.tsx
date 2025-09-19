import type {IPost} from "../../models/IPost.ts";

interface PostComponentProps {
    post: IPost
}

export const PostComponent = ({post: {title}}: PostComponentProps) => {
    return (
        <div>
            {title}
        </div>
    );
};

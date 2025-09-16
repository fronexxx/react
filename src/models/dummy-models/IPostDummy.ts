export interface IPostDummy {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: IReactions;
    views: number;
    userId: number;
}

interface IReactions {
  likes: number;
  dislikes: number;
}

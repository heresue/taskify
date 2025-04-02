export interface CommentsType {
  cursorId: number;
  comments: {
    id: number;
    content: string;
    createdAt: string;
    updatedAt: string;
    author: {
      profileImageUrl: string;
      nickname: string;
      id: number;
    };
  }[];
}

export interface CardData {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: {
    profileImageUrl: string;
    nickname: string;
    id: number;
  };
  imageUrl: string;
  teamId: string;
  columnId: number;
  createdAt: string;
  updatedAt: string;
}

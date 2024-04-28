export type User = {
  id: number;
  name: string;
  surname: string;
  email: string;
  userType: string;
  statistics: {
    loginCount: number;
    postCount: number;
    commentCount: number;
  };
};

export type SummaryStatistics = {
  totalLoginCount: number;
  totalPostCount: number;
  totalCommentCount: number;
};

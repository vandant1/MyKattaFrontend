export interface UpdatePost {
  id: number;
  senderId: number;
  updateType: 'ANNOUNCEMENT' | 'GENERAL';
  isPinned: boolean;
  createdAt: string;
  content: string;
  parent?: UpdatePost | null;
  replies?: Reply[];
}

export interface Reply {
  id: number;
  senderId: number;
  content: string;
  createdAt: string;
}

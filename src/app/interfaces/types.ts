export interface UserTypes {
  _id: string;
  username: string;
  formalName: string;
  avatar: string;
  email: string;
  createdAt: string;
}

export interface ChatTypes {
  _id: string;
  users: UserTypes[];
  createdBy: UserTypes;
  lastMessages: MessagesTypes;
  isGroupChat: boolean;
  admins: UserTypes[];
  groupName: string;
  groupDescription: string;
  groupProfileImage: string;
  unreadCounts: any;
  createdAt: string;
  updatedAt: string;
}

export interface MessagesTypes {
  _id: string;
  chat: ChatTypes;
  sender: UserTypes;
  text: string;
  image: string;
  readBy: UserTypes[];
  createdAt: string;
  updatedAt: string;
}
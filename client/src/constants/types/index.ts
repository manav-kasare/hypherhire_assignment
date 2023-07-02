import { ITheme } from './theme';

export * from './components';
export * from './theme';

export interface IComment {
  id: String;
  user: { username: String; verified: Boolean; avatar: String };
  text: String;
  likes: Number;
  replies: Number;
  timeStamp: String;
}

export interface IReply {
  id: String;
  user: { username: String; verified: Boolean; avatar: String };
  text: String;
  likes: Number;
  commentId: String;
  timeStamp: String;
}

export interface IUseData {
  theme: ITheme;
  setTheme: (theme?: ITheme) => void;
}

export type IConfig = {
  API_URL: string;
};

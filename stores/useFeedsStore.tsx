import {create} from 'zustand';
import {FeedsDefaultValue} from './FeedsDefaultValue';
import {IFeedsType} from './types';

type IState = {
  feeds: IFeedsType[];
  getDetailFeeds: (id: number) => IFeedsType;
  addComment: (id: number, comment: string) => void;
  upvote: (id: number) => void;
  downvote: (id: number) => void;
};

export const useFeedsStore = create<IState>((set, get) => ({
  feeds: FeedsDefaultValue,
  getDetailFeeds: (id: number) => {
    const feeds = get().feeds;
    return feeds[id];
  },
  addComment: (id: number, comment: string) => {
    const feeds = get().feeds;
    feeds[id].comments.push(comment);

    set({
      feeds: feeds,
    });
  },
  upvote: (id: number) => {
    const feeds = get().feeds;
    feeds[id].vote += 1;
    set({
      feeds: feeds,
    });
  },
  downvote: (id: number) => {
    const feeds = get().feeds;
    feeds[id].vote -= 1;
    set({
      feeds: feeds,
    });
  },
}));

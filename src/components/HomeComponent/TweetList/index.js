import {
  KZ_IMG_PATH,
  MARKETPLACE_IMG_PATH,
  FIND_FRIENDS_IMG_PATH,
  CLOCK_IMG_PATH,
  CALENDAR_IMG_PATH,
} from '../images';
import Tweet from './Tweet';

export default function TweetList() {
  const tweets = [
    {
      authorName: 'Free KZ Today',
      authorUserName: '@KZ',
      img: KZ_IMG_PATH,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      retweets: 1000,
      replice: 200,
      likes: 500,
    },
    {
      authorName: 'NFactorial',
      authorUserName: '@KZ',
      img: MARKETPLACE_IMG_PATH,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      retweets: 1000,
      replice: 200,
      likes: 500,
    },
    {
      authorName: 'Free KZ Today',
      authorUserName: '@KZ',
      img: FIND_FRIENDS_IMG_PATH,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      retweets: 1000,
      replice: 200,
      likes: 500,
    },
    {
      authorName: 'FNFactorial',
      authorUserName: '@KZ',
      img: CLOCK_IMG_PATH,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      retweets: 1000,
      replice: 200,
      likes: 500,
    },
    {
      authorName: 'Free KZ Today',
      authorUserName: '@KZ',
      img: CALENDAR_IMG_PATH,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      retweets: 1000,
      replice: 200,
      likes: 500,
    },
  ];

  return tweets.map((tweet, index) => <Tweet key={index} {...tweet} />);
}

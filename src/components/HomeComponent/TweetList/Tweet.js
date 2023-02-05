import { COMMENTS, LIKES, RETWEETS, SHARE } from '../images';
import { useState } from 'react';

export default function Tweet({
  authorName,
  authorUserName,
  img,
  content,
  retweets,
  replice,
  likes,
}) {
  const [title, setTitle] = useState(content);
  return (
    <div className="mt-3 px-3" style={{ borderBottom: '2px solid whitesmoke' }}>
      <p className="mx-5" style={{ fontSize: 14, fontWeight: 600 }}>
        You might like! <span style={{ color: 'blue' }}>See more</span>
      </p>
      <div className="d-flex">
        <img src={img} style={{ width: 50, height: 50, borderRadius: 50 }} />
        <div className="mx-3">
          <p style={{ fontWeight: 600 }}>
            {authorName} <span style={{ color: 'grey' }}>{authorUserName}</span>{' '}
          </p>
          <p>{title.length < 200 ? title : title.slice(0, 200)}...</p>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <div style={{ width: 20, height: 20 }}>{COMMENTS}</div>
          <p className="px-1">{replice}</p>
        </div>
        <div className="d-flex">
          <div style={{ width: 20, height: 20 }}>{RETWEETS}</div>
          <p className="px-1">{retweets}</p>
        </div>
        <div className="d-flex">
          <div style={{ width: 20, height: 20 }}>{LIKES}</div>
          <p className="px-1">{likes}</p>
        </div>
        <div className="d-flex">
          <div style={{ width: 20, height: 20 }}>{SHARE}</div>
        </div>
      </div>
    </div>
  );
}

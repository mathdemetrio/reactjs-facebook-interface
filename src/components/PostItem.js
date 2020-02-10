import React from 'react';

function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img alt={author.name} src={author.avatar} />
      <p>
        <strong>{author.name}</strong>
        <br />
        <small>{date}</small>
      </p>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div className="comments-list">
      {comments.map(comment => (
        <div className="comment-item" key={comment.id}>
          <img alt={comment.author.name} src={comment.author.avatar} />
          <div className="comment-text">
            <p>
              <strong className="comment-author-name">
                {comment.author.name}
              </strong>
              <span>{comment.content}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function PostItem({ author, date, content, comments }) {
  return (
    <article>
      <PostHeader author={author} date={date} />
      <p className="post-content-text">{content}</p>
      <PostComments comments={comments} />
    </article>
  );
}

export default PostItem;

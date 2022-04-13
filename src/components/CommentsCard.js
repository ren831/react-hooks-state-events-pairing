import CommentList from "./CommentList";

function CommentsCard({ comments }) {
  return (
    <div>
      <h2>{comments.length} Comments </h2>
      <div>
        {" "}
        {comments.map((comment) => (
          <CommentList key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default CommentsCard;

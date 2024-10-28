import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$postId")({
  component: PostsPostId,
});

function PostsPostId() {
  const { postId } = Route.useParams();
  return (
    <div>
      <h1>Post {postId}</h1>
    </div>
  );
}

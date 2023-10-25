import { useLoaderData } from "react-router-dom";

import { fetchAllPosts } from "../../services/apiPost";
import PostList from "./PostList";

const Post = () => {
  const posts = useLoaderData();

  return (
    <div>
      <h1>Post</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Post;

export async function loader() {
  const posts = await fetchAllPosts();

  return posts;
}

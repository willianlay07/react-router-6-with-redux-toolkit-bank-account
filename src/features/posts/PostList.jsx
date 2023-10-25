import PostListItem from "./PostListItem";

const PostList = ({ posts }) => {
  return (
    <>
      <ul style={{ listStyleType: "none" }}>
        {posts.map((post) => (
          <PostListItem
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </ul>
    </>
  );
};

export default PostList;

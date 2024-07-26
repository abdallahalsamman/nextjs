import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

export default function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="abbood" text="Edreb ya kabeer" />
      </ul>
    </>
  );
}

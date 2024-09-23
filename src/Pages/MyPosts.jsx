import service from "../APPWRITE/config";
import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../Components";
import { useSelector } from "react-redux";

export default function MyPosts() {
    const userData = useSelector((state) =>state.auth.userData)
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      service.allPost([]).then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      })
}, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {
            posts.filter((post)=>post.userId === userData.$id).map((post) => (
            <div key={post.$id} className="p-2">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
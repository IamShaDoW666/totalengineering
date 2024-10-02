"use client";

import { api } from "@/trpc/react";


const Posts = () => {
    const [posts] = api.post.getAll.useSuspenseQuery();
  return (
    <div className="grid grid-cols-3 gap-4 rounded bg-zinc-800 p-12">
        {posts.map((post) => <div key={post.id} className="text-xl text-white font-bold">
            {post.name}
        </div>)}
    </div>
  );
};

export default Posts

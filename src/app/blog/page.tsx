import Link from 'next/link';
import { getPosts } from '@/lib/post';
import Category from '@/components/layout/Category';

const BlogPage = () => {
  const posts = getPosts();

  return (
    <div className="">
      <h1 className="text-2xl font-medium mb-14">Blog</h1>

      {/* 카테고리 영역 */}
      <Category />

      {/* 포스트 리스트 */}
      <ul className="grid ">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="flex gap-8">
              <div className="bg-gray-200 w-40 h-40 flex-shrink-0">{/* <Image /> */}</div>
              <div className="flex-1">
                <span className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-500">
                  {post.category}
                </span>
                <p className="font-medium mt-2 text-xl line-clamp-1">{post.title}</p>
                <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                <p className="text-sm text-gray-500 mt-1 text-ellipsis line-clamp-3">
                  {post.content}
                </p>
              </div>
            </Link>
            <div className="w-full h-0.5 bg-gray-100 my-8"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;

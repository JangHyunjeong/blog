import { getPostDetailBySlug } from '@/lib/post';

const PostDetail = async ({ params: paramsPromise }: { params: Promise<{ slug: string }> }) => {
  const params = await paramsPromise;
  const post = await getPostDetailBySlug(params.slug);
  return (
    <div>
      <div className="mb-10 pb-7 border-gray-300 border-b ">
        <span className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-500">
          {post.category}
        </span>
        <p className="font-bold mt-4 text-3xl">{post.title}</p>
        <p className="text-sm text-gray-500 mt-3">{post.date}</p>
      </div>
      <div className="prose prose-base">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default PostDetail;

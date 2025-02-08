import { getPostDetailBySlug } from '@/lib/post';

const PostDetail = async ({ params: paramsPromise }: { params: Promise<{ slug: string }> }) => {
  const params = await paramsPromise;
  const post = await getPostDetailBySlug(params.slug);
  return (
    <div>
      <div className="prose prose-base">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default PostDetail;

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostType } from '@/types/Blog';
import { remark } from 'remark';
import { rehype } from 'rehype';
import remarkHtml from 'remark-html';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

const postsDirectory = path.join(process.cwd(), '/src/posts');

// .mdx 리스트 받아오기
export const getPosts = async (): Promise<PostType[]> => {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data = {}, content = '' } = matter(fileContents);

      const { thumbnail = '', category = '', title = '', date = '', description = '' } = data || {};
      const htmlContent = await parseMarkdownToHtml(content);
      const htmlString = htmlContent.toString();
      const paragraphContent =
        htmlString
          .match(/<p>(.*?)<\/p>/g)
          ?.map((p) => p.replace(/<\/?p>/g, '').replace(/<[^>]+>/g, ''))
          .join(' ') || '';

      return {
        slug: fileName.replace(/\.mdx$/, ''),
        thumbnail,
        category,
        title,
        date,
        description,
        content: paragraphContent,
      } as PostType;
    }),
  );
  return posts;
};

// .mdx 상세 내용 받아오기
export const getPostDetailBySlug = async (slug: string): Promise<PostType> => {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const { thumbnail = '', category = '', title = '', date = '', description = '' } = data || {};
  const parsedContent = await parseMarkdownToHtml(content);
  return {
    thumbnail,
    category,
    title,
    date,
    description,
    content: parsedContent,
    slug,
  } as PostType;
};

export const parseMarkdownToHtml = async (content: string): Promise<string> => {
  // markdown -> html
  const processedContent = await remark()
    .use(remarkGfm) // GitHub Markdown 지원
    .use(remarkToc) // 목차 생성
    .use(remarkHtml) // Markdown -> HTML 변환
    .process(content);

  // styling html
  const highlightedContent = await rehype()
    .use(rehypeSlug) // h1, h2, h3 태그에 자동으로 id 추가
    .use(rehypePrism) // 코드 하이라이트 추가
    .process(processedContent.toString());

  return highlightedContent.toString();
};

// category 받아오기
export const getCategory = async () => {
  const allData = await getPosts();

  if (!allData || allData.length === 0) return [];
  const categories =
    allData.map((item) => {
      return { value: item.category.trim().toLowerCase(), label: item.category, isActive: false };
    }) || [];

  // 중복 카테고리 제거
  const filteredCategory = [
    { value: '', label: '전체', isActive: true },
    ...new Map(categories.map((item) => [item.value.trim().toLowerCase(), item])).values(),
  ];

  return filteredCategory as { value: string; label: string; isActive: boolean }[];
};

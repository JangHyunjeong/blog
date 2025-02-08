import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostType } from '@/types/Blog';

const postsDirectory = path.join(process.cwd(), '/src/posts');

// .mdx 리스트 받아오기기
export const getPosts = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data = {}, content = '' } = matter(fileContents);

    const { thumbnail = '', category = '', title = '', date = '', description = '' } = data || {};

    return {
      slug: fileName.replace(/\.mdx$/, ''),
      thumbnail,
      category,
      title,
      date,
      description,
      content,
    } as PostType;
  });
};


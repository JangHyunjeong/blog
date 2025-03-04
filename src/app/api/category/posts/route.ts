import { NextResponse } from 'next/server';
import { getPosts } from '@/lib/post';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const Category = searchParams.get('category');
  console.log('Category', Category);

  let posts = await getPosts();
  if (Category) posts = posts.filter((post) => post?.category.toLowerCase().trim() === Category);
  return NextResponse.json(posts);
}

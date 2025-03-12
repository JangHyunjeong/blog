import { NextResponse } from 'next/server'; // next.js 에서 서버 응답
import { getCategory } from '@/lib/post';

export async function GET() {
  const blogCategory = getCategory();
  return NextResponse.json(blogCategory);
}

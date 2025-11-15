import { NextResponse } from 'next/server';
import {api} from '../api'

export async function GET(req: Request) {
  const url = new URL(req.url);
  const page = url.searchParams.get('page') || '1';
  const perPage = url.searchParams.get('perPage') || '2';

  try {
    const res = await api.get('/categories', {
      params: { page, perPage },
    });

    return NextResponse.json(res.data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

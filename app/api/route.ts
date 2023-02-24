import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const response = NextResponse.json({ test: 'ok'})
  response.cookies.set('jwt', 'test')
  response.cookies.set('rt', 'rt test') // not set !!!
  return response
}

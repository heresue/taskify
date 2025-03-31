import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import ROUTES from '@/constants/routes';

const PUBLIC_PATHS = [ROUTES.HOME, ROUTES.LOGIN, ROUTES.SIGNUP];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get('accessToken')?.value;
  const isLoggedIn = !!token;
  const isPublicPath = PUBLIC_PATHS.includes(pathname);

  if (isLoggedIn && isPublicPath) {
    return NextResponse.redirect(new URL(ROUTES.MY_DASHBOARD, request.url));
  }

  if (!isLoggedIn && !isPublicPath) {
    return NextResponse.redirect(new URL(ROUTES.HOME, request.url));
  }

  return NextResponse.next();
}

export const config = {
  /*
    아래 패턴을 따르는 경우 middleware에서 제외
    - nextjs의 정적 리소스 (JS,CSS Chunk 등)
    - /public 폴더 내 favicon, icons, images, logo, fonts 파일
    - api 라우트
  */
  matcher: ['/((?!_next|favicon|icons|images|logo|fonts|api).*)'],
};

import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest){
    const isAuthenticated = request.cookies.get("auth")?.value === "true"

    const {pathname} = request.nextUrl
    if (pathname.startsWith("/products") && !isAuthenticated){
        return NextResponse.redirect(
            new URL("/login", request.url)
        )
    }

    if(pathname === "/login" && isAuthenticated){
        return NextResponse.redirect( new URL("/products", request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/products/:path*", "/login"]
}
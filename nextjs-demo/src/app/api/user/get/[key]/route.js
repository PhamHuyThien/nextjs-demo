import {NextResponse} from "next/server";

export async function GET(request, {params}) {
    const {key} = await params;
    const searchParams = new URLSearchParams(request.url);
    let body, formData;

    const cookieStore = request.cookies;
    const headerStore = request.headers;

    const contentType = headerStore.get("content-type") || "";
    if (contentType.includes("application/json")) {
        body = await request.json();

    } else if (contentType.includes("multipart/form-data")
        || contentType.includes("application/x-www-form-urlencoded")) {
        formData = await request.formData();
    }

    const response = {
        key,
        searchParams: Object.fromEntries(searchParams),
        body,
        formData: formData && Object.fromEntries(formData),
        cookieStore: Object.fromEntries(cookieStore),
        headerStore: Object.fromEntries(headerStore),
    }

    return NextResponse.json(response, {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, s-maxage=31536000",
            "Vary": "Accept-Encoding",
            "thienph": "dz",
        }
    })
}

export const POST = GET;
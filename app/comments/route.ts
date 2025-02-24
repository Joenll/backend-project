import {comments} from "./data";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest){
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComment = query ? comments.filter((comment) => comment.text.includes(query)): comments;
    return Response.json(filteredComment);
}

export async function POST(request: Request){
    const comment = await request.json();
    const newComment = {
        id: comments.length + 1,
        text: comment.text
    }

    comments.push(newComment);
    return Response.json(newComment)
}


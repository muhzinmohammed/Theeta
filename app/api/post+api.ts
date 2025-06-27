export function GET(request: Request) {
    console.log("request recieved")
    return Response.json({hello:"world"})
}
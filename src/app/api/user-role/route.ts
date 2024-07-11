// route that returns hardcoded user role like admin, moderator, finance etc
//
// app/api/user-role/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
    // Hard-coded user roles
    const roles = ["admin", "finance", "user"];

    // Return the roles as a JSON response
    return NextResponse.json({ userRole: roles[2] });
}

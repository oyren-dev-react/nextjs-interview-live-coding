import {ReactNode} from "react";

export default async function DashboardLayout({children}: { children: ReactNode }) {
    const userRole = await getUserRole()
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            {children}
        </section>
    )
}

type UserRole = "admin" | "user" | "finance"
async function getUserRole(): Promise<UserRole>{
    return Promise.resolve("user")
}
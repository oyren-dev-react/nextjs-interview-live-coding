import {ReactNode} from "react";

type DashboardLayoutProps = {
    admin: ReactNode;
    user: ReactNode;
    finance: ReactNode;
};
export default async function DashboardLayout({admin, user, finance}: DashboardLayoutProps) {
    // get user role from the server
    const userRoleData = await getUserRole()

    return (
        <section>
            {userRoleData === "admin" && admin}
            {userRoleData === "user" && user}
            {userRoleData === "finance" && finance}
        </section>
    )
}

type UserRole = "admin" | "user" | "finance"
async function getUserRole(): Promise<UserRole>{
    return Promise.resolve("finance")
}
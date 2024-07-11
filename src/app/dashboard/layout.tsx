import {ReactNode} from "react";

export default function DashboardLayout({children}: { children: ReactNode }) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <h1> THIS IS DASHBOARD NAV </h1>

            {children}
        </section>
    )
}
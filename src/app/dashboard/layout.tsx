import {ReactNode} from "react";

export default function DashboardLayout({children}: { children: ReactNode }) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            {children}
        </section>
    )
}
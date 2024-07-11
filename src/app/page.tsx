import Link from "next/link";

export default function Home() {


    return (
        <main>
            <div className={"min-h-screen bg-green-50 text-3xl text-center flex flex-col items-center justify-center"}>

                <h1>Interview Problem</h1>

                <Link href={"/dashboard"}>
                    <button className={"p-3 border-2 border-blue-600 m-4 rounded shadow-lg shadow-blue-400"}>
                        Dashboard
                    </button>
                </Link>
            </div>
        </main>
    );
}

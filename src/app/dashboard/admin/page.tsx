import {CodePreviewBlox} from "@oyren/bloxjs";
import MyCodeRenderer from "@/app/components/MyCodeRenderer";

async function getAdminDashBoardCode() {
    const response = await fetch(`https://oyren.dev/api/code-page/1c5bcd38-f4b9-49cd-9ab1-cd69097c82dc`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Add any required headers here, such as authorization
        },
        cache: 'no-cache',
    });

    console.log("response", response.status)

    // Check if the response is OK
    if (!response.ok) {
        throw new Error('Failed to fetch data from third-party API');
    }

    // Parse the JSON data
    const data = await response.json();

    return data;
}

export default async function Dashboard() {
    const codePage = await getAdminDashBoardCode();
    return (
        <div className={"flex flex-col"}>
            <h1 className={"text-center  text-white p-3 font-bold text-lg bg-gradient-to-r from-green-800 to-blue-800"}>This is Admin dashboard</h1>
            <MyCodeRenderer codeAsString={codePage.codePageCode}/>
        </div>
    )

}
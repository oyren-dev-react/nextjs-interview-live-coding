import {CodePreviewBlox} from "@oyren/bloxjs";
import MyCodeRenderer from "@/app/components/MyCodeRenderer";

async function getAdminDashBoardCode() {
    const response = await fetch(`https://oyren.dev/api/code-page/092a2810-0283-41b6-866f-b8cec6332296`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Add any required headers here, such as authorization
        },
        cache: 'no-cache',
    });

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
            <h1 className={"text-center  text-white p-3 font-bold text-lg bg-gradient-to-r from-green-800 to-blue-800"}>This is Finance dashboard</h1>
            <MyCodeRenderer codeAsString={codePage.codePageCode}/>
        </div>
    )

}
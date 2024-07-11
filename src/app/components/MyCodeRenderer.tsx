"use client"

import {CodePreviewBlox} from "@oyren/bloxjs";


export default function MyCodeRenderer({codeAsString}: { codeAsString: string }) {

    const files = JSON.parse(codeAsString);


    return (
        <div className={""}>

            <CodePreviewBlox codes={files}/>
        </div>
    )
}
async function fetchJson(url) {
    var r = await fetch(url);
    if(!r.ok) throw new Error("HTTP" + r.status + "en" + url);
    return await r.json();
}

async function postJson(url,data) {
    const r = await fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if(!r.ok) throw new Error("HTTP" + r.status + "en" + url);
    return await r.json();
}

export{fetchJson, postJson}

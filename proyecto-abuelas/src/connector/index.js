async function fetchWithTimeout(resource, options) {
    debugger
    const { timeout = 7000 } = options;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(resource, {
        ...options,
        signal: controller.signal  
    });
    clearTimeout(id);
    return response;
  }

export async function getMultimedia(id){
    const url = "/api/multimedia/" + id;
    const response = await fetchWithTimeout(url, {})
    const responseJson = await response.json()
    return responseJson
}

export async function getMultimediaByActivityId(id){
    const url = "/api/multimedia?actividad=" + id;
    const response = await fetchWithTimeout(url, {})
    const responseJson = await response.json()
    return responseJson
}

export async function getActivity(id){
    const url = "/api/actividad/" + id;
    const response = await fetchWithTimeout(url, {})
    const responseJson = await response.json()
    return responseJson
}

export async function getActivityByMultimediaId(id){
    const url = "/api/actividad?multimedia=" + id;
    const response = await fetchWithTimeout(url, {})
    const responseJson = await response.json()
    return responseJson
}

export async function getTimeline(){
    const url = "/api/timeline";
    const response = await fetchWithTimeout(url, {})
    const responseJson = await response.json()
    return responseJson
}
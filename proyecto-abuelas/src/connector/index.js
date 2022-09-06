async function fetchWithTimeout(resource, options) {
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
    const url = "http://127.0.0.1:8080/api/multimedia/" + id;
    const response = await fetchWithTimeout(url, {})
    const responseJson = await response.json()
    return responseJson
}

export async function getMultimediaByActivityId(id){
    const url = "http://127.0.0.1:8080/api/multimedia?actividad=" + id;
    const response = await fetchWithTimeout(url, {})
    const responseJson = await response.json()
    return responseJson
}

export async function getActivity(id){
    const url = "http://127.0.0.1:8080/api/actividad/" + id;
    const response = await fetchWithTimeout(url, {})
    const responseJson = await response.json()
    return responseJson
}

export async function getActivityByMultimediaId(id){
    const url = "http://127.0.0.1:8080/api/actividad?multimedia=" + id;
    const response = await fetchWithTimeout(url, {})
    const responseJson = await response.json()
    return responseJson
}

export async function getTimeline(){
    const url = "http://127.0.0.1:8080/api/timeline";
    const response = await fetchWithTimeout(url, {})
    const responseJson = await response.json()
    return responseJson
}
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charet=UTF-8'
}

const baseURL = 'https://whispering-fjord-31677.herokuapp.com';

const API = (url, method, body) => {
    let data = body ? {...headers, method, body:JSON.strigify(body)} : {...headers, method}
    return fetch(`${baseURL}${url}`, data)
}

export default API
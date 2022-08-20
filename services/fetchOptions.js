const url = "http://localhost:3000/"

const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Accept": "application/json",
}
const putHeaders = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
}

function getUrlAndHeaders() {
    return {
      url,
      headers,
      putHeaders
    }
  }
  
  export { getUrlAndHeaders }
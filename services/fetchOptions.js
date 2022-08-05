const url = "http://localhost:3000/"

const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Accept": "application/json",
}

function getUrlAndHeaders() {
    return {
      url,
      headers
    }
  }
  
  export { getUrlAndHeaders }
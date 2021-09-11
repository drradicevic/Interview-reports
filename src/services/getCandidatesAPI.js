export async function getCandidatesAPI(url, token) {
    //Default options are marked with *
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers:  { 
          Authorization: `Bearer ${token}` 
        }
    });
    return response.json(); // parses JSON response into native JavaScript object
}
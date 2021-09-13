export async function getSingleCandidateInfo(url, token) {
    //Default options are marked with *
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers:  { 
          Authorization: `Bearer ${token}` 
        }
    });
    const result = await response.json();
    return result; // parses JSON response into native JavaScript object
}
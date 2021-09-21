export async function getTokenAPI(data) {
    const tokenEndpoint = "http://localhost:3333/login";
    try {
      const response = await fetch(tokenEndpoint, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      if (response.statusText === "Bad Request") {
        throw new Error();
      }
      return response.json(); // parses JSON response into native JavaScript object
    } catch(err) {

      alert("Your email or password are incorrect!");
    }

}


export async function getCandidatesAPI(token) {
    const candidateEndpoint = "http://localhost:3333/api/candidates"
    const response = await fetch(candidateEndpoint, {
      method: "GET",
      headers:  { 
          Authorization: `Bearer ${token}` 
        }
    });
    const result = await response.json();
    return result;
}

export async function getSingleCandidateInfo(id, token) {
    const singleCandidateEndpoint = `http://localhost:3333/api/candidates/${id}`
    const response = await fetch(singleCandidateEndpoint, {
      method: "GET", 
      headers:  { 
          Authorization: `Bearer ${token}` 
        }
    });
    const result = await response.json();
    return result; 
}


export async function getCandidateReportsAPI(token) {
    const reportsEndpoint = "http://localhost:3333/api/reports";
    const response = await fetch(reportsEndpoint, {
      method: "GET",
      headers:  { 
          Authorization: `Bearer ${token}` 
        }
    });
    const result = await response.json();
    return result; 
}

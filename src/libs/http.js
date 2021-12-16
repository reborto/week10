const BASE_URL = "https://edgemony-backend.herokuapp.com";

const http = (resource) =>
  fetch(BASE_URL + resource).then((response) => response.json());

export { http };

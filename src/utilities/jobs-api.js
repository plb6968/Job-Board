import sendRequest from "./send-request";

const BASE_URL = '/api/jobs';


export function add(jobData) {
  return sendRequest(BASE_URL, 'POST', jobData);
}

export function getAll() {
  return sendRequest(BASE_URL);
}
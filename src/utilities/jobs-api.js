import sendRequest from "./send-request";
const BASE_URL = '/api/jobs';


export function add(jobData) {
  sendRequest(BASE_URL, 'POST', jobData);
}
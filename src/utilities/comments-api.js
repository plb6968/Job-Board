import sendRequest from '../utilities/send-request';

const BASE_URL = '/api/comments';

export function addComment(comment) {
  return sendRequest(`${BASE_URL}/`);
}

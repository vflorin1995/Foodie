const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wIvcfoeCMowsKdAOdXJy/comments';
const PostCommentData = async (id, name, comm) => {
  const body = JSON.stringify({ item_id: id, username: name, comment: comm });
  const response = await fetch(url, { method: 'POST', body, headers: { 'Content-type': 'application/json; charset=UTF-8' } });
  const data = await response.json();
  const returnResponse = data.result;
  return returnResponse;
};
export default PostCommentData;
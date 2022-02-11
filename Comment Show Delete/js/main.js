const commentButton = document.getElementById('addComment');

commentButton.addEventListener('click', () => {
  //step 1 : get comment and date
  const commentBody = document.getElementById('commentBody');
  const commentTime = new Date();

  //step 2 : create new comment
  const newCommentBody = document.createElement('p');
  newCommentBody.innerText = commentBody.value;
  newCommentBody.style.fontSize = 'large';

  const newCommentTime = document.createElement('p');
  newCommentTime.innerText = commentTime;
  newCommentTime.style.fontSize = 'small';

  const commentDiv = document.createElement('div');
  commentDiv.style.backgroundColor = '#EEEDEC';
  commentDiv.style.padding = '10px';
  commentDiv.style.margin = '15px';

  //step 3
  const commentList = document.getElementById('commentList');

  commentDiv.appendChild(newCommentBody);
  commentDiv.appendChild(newCommentTime);
  commentList.appendChild(commentDiv);

  //step 4
  commentBody.value = '';
});

const deleteButton = document.getElementById('deleteComment');
deleteButton.addEventListener('click', deleteComment);

function deleteComment() {
  const commentList = document.getElementById('commentList');
  let = length;
  length = commentList.children.length;

  commentList.removeChild(commentList.children[length - 1]);
  //console.dir(commentList);

  // for (comment in commentList.children) {
  //   console.log(comment);
  // }
}

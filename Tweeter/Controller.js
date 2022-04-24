$("#postButton").on("click", addNewPost)
render()

function addNewPost() {
    newPost = $("#tweetInput").val()
    $("#tweetInput").val("")
    tweeter.addPost(newPost)
    render()
}

function addNewComment() {
    newComment = $(this).closest("#CommentPost").find("#commentInput").val()
    postID = $(this).closest(".post").attr("id")
    tweeter.addComment(postID, newComment)
    render()
}

function deletePost(){
    postID = $(this).closest(".post").attr("id")
    tweeter.removePost(postID)
    render()
}

function deleteComment(){
    commentID = $(this).closest(".comment").find(".comments").attr("id")
    postID = $(this).closest(".post").attr("id")
    tweeter.removeComment(postID, commentID)
    render()

}
render = function () {
    $("#PostContainer").empty()
    createThePosts(tweeter.getPosts())
    addListeners()
}

function createThePosts(postsDB){
    for(post of postsDB){
        let newpost=
        `<div id="${post.id}" class="post">
            <div class="post-text">${post.text}</div>
            <div id="commnents">
            ${fetchComments(post.comments)}
            </div>
            <div id="CommentPost">
                <input id="commentInput" type="text" placeholder="write a comment!">
                <button class="commentSubmit" type="submit">Comment</button>
            </div>
            <div class="delete deletePost">Delete</div>
        </div>`
        $("#PostContainer").append(newpost)
    }
}

function fetchComments(postComments){
    let newcomment =""
    for(comment of postComments){
        newcomment+=
        `
        <div class="comment">
        <i class="fa-solid fa-xmark deleteComment"></i>
        <div class="comments" id="${comment.id}">${comment.text}</div>
        </div>
        `
    }
    return newcomment
}

function addListeners(){
    $(".commentSubmit").on("click" , addNewComment)
    $(".deletePost").on("click" , deletePost)
    $(".deleteComment").on("click" , deleteComment)
}
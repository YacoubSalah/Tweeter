const Tweeter = function () {

    _postIdCounter = 2
    _commentIdCounter = 6

    posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]


    GetPosts = () => this.posts

    AddPost = (postText) => {
        this._postIdCounter += 1
        newPost = {
            text: postText,
            id: "p" + (this._postIdCounter),
            comments: []
        }
        this.posts.push(newPost)
    }

    RemovePost = (postID) => {
        for (i in this.posts)
            if (posts[i].id == postID) {
                posts.splice(i, 1)
                return true
            }
    }

    AddComment = (postID, text) => {
        for (i in this.posts) {
            if (posts[i].id == postID) {
                this._commentIdCounter += 1
                newComment = {
                    text: text,
                    id: "c" + (this._commentIdCounter)
                }
                this.posts[i].comments.push(newComment)
                //return true
            }

        }

    }

    RemoveComment = (postID, commentID) => {
        for (i in this.posts) {
            if (this.posts[i].id == postID) {
                for (l in this.posts[i].comments) {
                    if (this.posts[i].comments[l].id == commentID) {
                        this.posts[i].comments.splice(l, 1)
                        return true
                    }
                }
            }

        }

    }

    return {
        getPosts: GetPosts,
        addPost: AddPost,
        removePost: RemovePost,
        addComment: AddComment,
        removeComment: RemoveComment
    }
}

const tweeter = Tweeter()
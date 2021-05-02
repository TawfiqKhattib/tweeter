const Tweeter = function() {
    const _posts = [{
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
    ];

    let _postIdCounter = 2;
    let _commentIdCounter = 6;
    const rend = Renderer()
    rend.renderPosts(_posts);

    const getPosts = function() {
        return _posts;
    }

    const indexNotExist = function(counter, postOrComm) {
        cnt = 0;
        for (let i = 1; i <= counter; i++) {
            for (let index in postOrComm) {
                if (parseInt(postOrComm[index].id[1]) !== i) {
                    cnt += 1;
                }
            }
            if (cnt === counter) {
                return (i - 1);
            }
            cnt = 0;
        }
        return counter;
    }
    const addPost = function(text) {
        const id = "p" + (indexNotExist(_postIdCounter, _posts) + 1);
        _posts.push({ text: text, id: id, comments: [] });
        _postIdCounter += 1;
        rend.renderPosts(_posts);
    }

    const removePost = function(postId) {
        for (let index in _posts) {
            if (parseInt(_posts[index].id[1]) === postId) {
                _posts.splice(index, 1);
                _postIdCounter -= 1;
            }
        }
        rend.renderPosts(_posts);
    }
    const addComment = function(postId, text) {
        const nextComm = "c" + (_commentIdCounter + 1);
        _posts[postId - 1].comments.push({ id: nextComm, text: text });
        _commentIdCounter += 1;
        rend.renderPosts(_posts);
    }

    const removeComment = function(postID, commentID) {
        for (let index in _posts[postID - 1].comments) {
            if (parseInt(_posts[postID - 1].comments[index].id[1]) === commentID) {
                _posts[postID - 1].comments.splice(index, 1);
                _commentIdCounter -= 1;
            }
        }
        rend.renderPosts(_posts);
    }
    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}


// console.log(myTweeter.getPosts()[1].comments[3]);
// myTweeter.addComment(2, "the last comment");
// console.log(myTweeter.getPosts()[1].comments[3]);
// myTweeter.removeComment(2, 4);
// console.log(myTweeter.getPosts()[1].comments[3]);
/////////////////////////////////////////////////////////////
// console.log(myTweeter.getPosts()[2]);
// myTweeter.addPost("post number 3");
// console.log(myTweeter.getPosts()[2]);
// myTweeter.removePost(3)
// console.log(myTweeter.getPosts()[2]);
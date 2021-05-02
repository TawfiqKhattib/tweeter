const Renderer = function() {

    const renderPosts = function(posts) {
        $("#posts").empty();
        for (post of posts) {
            $("#posts").append(`<div id=${post.id} class=item>${post.id}:  ${post.text} <button class="delPost">Delet Post</button> <button class=comment>Comment</button></div>`);
            const id = `${post.id}`;
            for (comment of post.comments)
                $("#" + id).append(`<div class=itemcom>${comment.id}:  ${comment.text}<button class="delCom">  X</button></div>`);
        }
    }

    return {
        renderPosts: renderPosts
    }
}
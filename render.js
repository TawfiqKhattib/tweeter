const Renderer = function() {

    const renderPosts = function(posts) {
        $("#posts").empty();
        for (post of posts) {
            $("#posts").append(`<div class=item>${post.id}:  ${post.text}</div>`);
            for (comment of post.comments)
                $("#posts").append(`<div class=item>${comment.id}:  ${comment.text}</div>`);
        }
    }

    return {
        renderPosts: renderPosts
    }
}
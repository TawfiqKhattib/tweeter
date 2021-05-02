const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

$("#post").on("click", function() {
    if ($("#input").val() != "") {
        tweeter.addPost($("#input").val());
        $("#input").val("");
    }
});

$("div").on("click", ".delPost", function() {
    tweeter.removePost(parseInt($(this).closest("div").text()[1]));
});

$("div").on("click", ".comment", function() {
    if ($("#input").val() != "") {
        tweeter.addComment(parseInt($(this).closest("div").text()[1]), $("#input").val());
        $("#input").val("");
    }

});

$("div").on("click", ".delCom", function() {
    tweeter.removeComment(parseInt($(this).closest(".item").text()[1]), parseInt($(this).closest("div").text()[1]));
});
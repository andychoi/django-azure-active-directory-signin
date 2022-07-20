$(function () {
    $(".markdown-body h2, .markdown-body h3").each(function () {
        let level_ = (parseInt(this.nodeName.slice(-1)) - 1).toString()
        $(".toctree ul").append("<li class='toc level-" + level_ + " tag-" + this.nodeName.toLowerCase() + "' data-level='" + level_ + "'><a class='d-flex flex-items-baseline' href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') + "'>" + $(this).text() + "</a></li>");
        $(this).attr("id", $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''));
        $(".toctree ul li:first-child a").parent().addClass("current");
    });

    $(".toctree ul li").on("click", "a", function (event) {
        var position = $($(this).attr("href")).offset().top - 190;
        $("html, body").animate({ scrollTop: position }, 400);
        $(".toctree ul li a").parent().removeClass("current");
        $(this).parent().addClass("current");
        event.preventDefault();
    });
});
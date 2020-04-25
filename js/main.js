$(document).ready( function () {
    let imgInit = function () {
        $('article .container img').each(function () {
            let imgPath = $(this).attr('src');
            $(this).wrap('<div class="img-item" data-src="' + imgPath + '" data-sub-html=".caption"></div>');

            $(this).addClass("img-shadow img-margin");
            let captionText = $(this).attr('alt') || $(this).attr('title') || "";
            
            if (captionText !== "") {
                let caption = "<div class='img-caption text-center'>";
                caption += "<b class='center-caption'>" + captionText + "</b>";
                caption += "</div>";

                let captionHtml = $.parseHTML(caption);
                $(this).parent().append(captionHtml);
            }
        });
    };
    imgInit();

    $('article').lightGallery({
        selector: '.img-item',
        subHtmlSelectorRelative: true
    });

    let tableInit = function () {
        $('article .container table').each(function () {
            if (!($(this).parent().hasClass("highlight"))) {
                $(this).wrap('<div class="table-responsive"></div>');
                $(this).addClass('table table-bordered');
            }
        });
    }
    tableInit();

    let highlightInit = function () {
        $('article .container figure:has(td.gutter)').each(function () {
            $(this).addClass('line_number');
        });
    }
    highlightInit();

    let footnoteInit = function () {
        $("#footnotes hr").addClass("block-hr");
        $("#footnotelist").addClass("panel panel-default");
        $("#footnotelist ol").addClass("list-group");
        $("#footnotelist li").addClass("list-group-item");
        $("#footnotelist ol").css({"margin-left": "0"});
        $("#footnotelist li span:first-child").css({"margin-left": "0"});

        var heading = '<div class="panel-heading">Reference</div>'
        let headingHtml = $.parseHTML(heading);
        $("#footnotelist").prepend(headingHtml);
    }
    footnoteInit();
});
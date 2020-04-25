$(document).ready( function() {
    let articleInit = function () {
        $('article .container img').each(function () {
            let imgPath = $(this).attr('src');
            $(this).wrap('<div class="img-item" data-src="' + imgPath + '" data-sub-html=".caption"></div>');

        $(this).addClass("img-shadow img-margin");
            let alt = $(this).attr('alt');
            let title = $(this).attr('title');
            let captionText = "";

            if (alt === undefined || alt === "") {
                if (title !== undefined && title !== "") {
                    captionText = title;
                }
            } else {
                captionText = alt;
            }
            
            if (captionText !== "") {
                let captionDiv = document.createElement('div');
                captionDiv.className = 'img-caption text-center';
                let captionEle = document.createElement('b');
                captionEle.className = 'center-caption';
                captionEle.innerText = captionText;
                captionDiv.appendChild(captionEle);
                this.insertAdjacentElement('afterend', captionDiv)
            }
        });
    };
    articleInit();
});
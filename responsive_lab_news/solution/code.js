YUI().use('node', 'yql', 'handlebars', function(Y) {
    Y.YQL(
        "select * from rss where url='http://rss.news.yahoo.com/rss/topstories'", 
        function(response) {
            var items = response.query.results.item;
            // Counter vars.
            var i; 
            var item;
            
            // Our templates, to be passed to substitute.
            var imgTemplate = Y.one("#template-img").getHTML();
            imgTemplate = Y.Handlebars.compile(imgTemplate);
            var articleTemplate = Y.one("#template-article").getHTML();
            articleTemplate = Y.Handlebars.compile(articleTemplate);
            
            // Build simple view, one for each news article, that can
            // accommodate a larger, more detailed view as well as a smaller,
            // single column view.
            // The image provided by the "content" object below is used
            // for the smallest view. The "description" contains the image,
            // if it exists, as found in the "content" object. In the smallest
            // view, the description detail is hidden, and the content image
            // is shown next ot the heading.
            // In all other views, the "content" image is hidden in favor of
            // the "description" image.
            
            // Response is a JavaScript object literal.
            // Total articles:
            //     query.results.item.length
            // Iterate the query.results.item array.
            // Use the following structure of contents within the *.item array:
            //     item.title -> title of the article.
            //     item.pubDate -> publish date of article (ISO time string).
            //     item.source -> object containing publisher information.
            //     item.description -> Short summary of our information.
            //     item.content -> object containing just image information.
            //         .height -> height of image in pixels.
            //         .width -> width of image in pixels.
            //         .url -> img src to the image.
            
            for (i = 0; i < items.length; i++) {
                item = items[i];
                
                // Fix the shorter, content image for use in short view.
                // Content does not always exist.
                if (item.content) {
                    item.img = imgTemplate(item.content);
                }
                else {
                    // Make it exist, but as an empty string.
                    item.img = "";
                }
                
                // Convert the date into a JavaScript date, as we assume
                // we are in a browser that supports ISO dates.
                item.pubDate = (new Date(item.pubDate)).toLocaleString();
                Y.one("#news").append( articleTemplate(item) );
            }
        }
    );
});

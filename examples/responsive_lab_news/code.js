YUI().use('node', 'yql', 'handlebars', function(Y) {
    Y.YQL(
        "select * from rss where url='http://rss.news.yahoo.com/rss/topstories'", 
        function(response) {
            var items = response.query.results.item;
            var i; 
            var item;
            
            var imgTemplate = Y.one("#template-img").getHTML();
            imgTemplate = Y.Handlebars.compile(imgTemplate);
            var articleTemplate = Y.one("#template-article").getHTML();
            articleTemplate = Y.Handlebars.compile(articleTemplate);
            
            for (i = 0; i < items.length; i++) {
                item = items[i];
                
                if (item.content) {
                    item.img = imgTemplate(item.content);
                }
                else {
                    item.img = "";
                }
                
                item.pubDate = (new Date(item.pubDate)).toLocaleString();
                Y.one("#news").append( articleTemplate(item) );
            }
        }
    );
});

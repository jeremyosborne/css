Lab - News Reader
=================

* Your goal is to make a simple flexible display of headlines and news blurbs.
* All of the HTML and JavaScript is complete. Feel free to modify it if you
  wish, but the lab does not require you to modify it. That said, you will
  likely need to poke around the displayed HTML on the page since it is
  dynamically created via JS and templates.
* The CSS is where the lab is focused, although the basic, and simple, reset
  has been completed for you.
* All CSS you write should fall more into the flexible/responsive realm.
  That means attempt to use relative units as much as possible, namely
  percentages and ems.
* Your design goals are as follows:
    * General style.
        * Style up the individual articles so that the headline (the header and
          contained h1 and h2) look like a decent headline for an article.
        * Notice that by default two images are visible in articles that have
          images. One image is contained in the header. One image is dropped
          into the content of the article (by way of the content returned
          by the news service). We will deal with each of these images
          separately (see below), but note this is not a bug.
    * Widescreen view, aka. the Default style
        * Have the news container aligned in the middle of the page with some
          white space margin between it and the edge of the browser.
        * Hide the img tag that is in the header by default (we'll use it
          later).
        * Lay the articles out in a three column view by default. How you
          do the three column view is up to you -- floats or inline-blocks --
          but no tables.
        * Float the image in the article content to the left of the article
          content. (Some articles won't have images, this is normal.)
        * Play with the font just a bit, if you like typography. Make the
          articles readable (according to you, you are in charge here).
    * Smaller Views (less than 1024px)
        * Make a media query that kicks in when the viewport is less than
          1024px.
        * Make all fonts on the page slightly smaller (10 to 20%).
    * Even smaller views (less than 960px)
        * Make a media query that kicks in when the viewport is less than
          960px.
        * Switch from a three column layout to a two column layout.
        * Adjust the height of the articles so that there isn't too much
          empty white space between articles.
    * Less than tablet portrait view (less than 768px) 
        * Make a media query that kicks in when the viewport is less than
          768px.
        * Switch from a two column to a one column layout.
        * Adjust the height of the articles so that there isn't too much
          empty white space between articles.
    * Mobile landscape size and smaller (less than 480px)
        * Make a media query that kicks in when the viewport is less than
          480px.
        * Hide the content of the article (essentially everything not in the
          header tag).
        * Show the img in the header tag.
        * Float the image to the left of the h1 and h2 content of the header,
          leaving a bit of white space between the image and the headers.
        * Adjust the height of the article so there is little white space
          between each "article". The final view should look more like a 
          list of headlines.


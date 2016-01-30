<html>
    <head>
        <title>drawlly - Draw Daily</title>
        <link rel="Stylesheet" href="style.css" />
        <script type="text/javascript" language="javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js"></script>
        <script type="text/javascript" language="javascript" src="myScript.js"></script>
        <script src="socialcount/socialcount.min.js"></script>
        <link href="socialcount/socialcount-with-icons.min.css" rel="stylesheet" />
        <meta property="og:image" content="http://drawlly.com/drawlly800.png" />
    </head>
    <body>
        <h1 id="themer">drawlly says..<br />Try drawing <i id="tagline">a giant frisbee chasing a hairy goat</i>.</h1>
        <h5><a href="#" id="refresh">refresh</a> -- <a id="myLink" href="#">permalink</a></h5>
        <div class="centered"><img src="drawlly800.png" alt="logo" /></div>
        <div class="centered">
            <ul class="socialcount" data-url="http://www.drawlly.com/" data-counts="true">
	            <li class="facebook"><a href="https://www.facebook.com/sharer/sharer.php?u=http://www.drawlly.com/" title="Share on Facebook"><span class="social-icon icon-facebook"></span><span class="count">Like</span></a></li>
	            <li class="twitter"><a href="https://twitter.com/intent/tweet?text=http://www.drawlly.com/" title="Share on Twitter"><span class="social-icon icon-twitter"></span><span class="count">Tweet</span></a></li>
	            <li class="googleplus"><a href="https://plus.google.com/share?url=http://www.drawlly.com/" title="Share on Google Plus"><span class="social-icon icon-googleplus"></span><span class="count">+1</span></a></li>
            </ul>
        </div>

        <!-- Start of Woopra Code -->
<script type="text/javascript">
    function woopraReady(tracker) {
        tracker.setDomain('drawlly.com');
        tracker.setIdleTimeout(1800000);
        tracker.trackPageview({ type: 'pageview', url: window.location.pathname + window.location.search, title: document.title });
        return false;
    }
    (function () {
        var wsc = document.createElement('script');
        wsc.src = document.location.protocol + '//static.woopra.com/js/woopra.js';
        wsc.type = 'text/javascript';
        wsc.async = true;
        var ssc = document.getElementsByTagName('script')[0];
        ssc.parentNode.insertBefore(wsc, ssc);
    })();
</script>
<!-- End of Woopra Code -->
    </body>
</html>
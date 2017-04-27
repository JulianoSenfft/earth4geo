<?php
include("header.php");
?>

    <script type="text/jsx" src="js/react/feeds.jsx"></script>

    <script type="text/jsx">
        ReactDOM.render(
            <Feed data={[]} />,
            document.getElementById('feed1')
        );
        ReactDOM.render(
            <Feed data={[]} />,
            document.getElementById('feed2')
        );
    </script>

    <body class="home has-full-map">
        <div id="main">
            <div class="row">
                <div class="col-md-9">
                    <div id="feed1"></div>
                </div>
                <div class="col-md-3">
                    <div id="feed2"></div>
                </div>
            </div>
        </div>
    </body>

<?php
include("footer.php");
?>
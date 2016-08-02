<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="_token" content="{!! csrf_token() !!}"/>
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="container">
    <div id="main">
        <div id="nav">
            <ul>
                <li><a href="/">Main page</a></li>
                <li><a href="/#/books">Books page</a></li>
                <li><a href="/#/users">Users page</a></li>
                <li><a href="/#/createuser">New User</a></li>
                <li><a href="/#/createbook">New Book</a></li>
            </ul>
        </div>
        <div id="content">
            <h1>BSA 2016 PHP HOMEWORK</h1>
        </div>
    </div>

</div>

<script type="text/javascript">
    window.__token ="{!! csrf_token() !!}";
</script>
<script src="js/bundle.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--===== CSS =====-->
    <link rel="stylesheet" href="assets/css/styles.css">

    <title>Login form style google</title>
</head>

<body>
    <div class="l-form">
        <form action="" class="form" method="post" id="form">
            <h1 class="form__title">Email</h1>

            <div class="form__div">
                <input type="email" class="form__input" placeholder=" " name="to">
                <label for="" class="form__label">To</label>
            </div>
            <div class="form__div">
                <input type="text" class="form__input" placeholder=" " name="subject">
                <label for="" class="form__label">Subject</label>
            </div>
            <div class="form__div form__textarea__div">
                <textarea class="form__input" rows="5" placeholder=" " name="msg"></textarea>
                <label for="" class="form__label">Message</label>
            </div>
            <input type="submit" class="form__button" id="submit" value="Send">
        </form>
    </div>

    <script type="text/javascript" src="assets/js/main.js"></script>
</body>
</html>
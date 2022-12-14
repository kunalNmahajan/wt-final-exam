<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dark Mode</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js">
    </script>

    <style>
        body {
            padding: 10% 3% 10% 3%;
            text-align: center;
        }

        img {
            height: 140px;
            width: 140px;
        }

        h1 {
            color: #32a852;
        }

        .mode {
            float: right;
        }

        .change {
            cursor: pointer;
            border: 1px solid #555;
            border-radius: 40%;
            width: 20px;
            text-align: center;
            padding: 5px;
            margin-left: 8px;
        }

        .dark {
            background-color: #222;
            color: #e6e6e6;
        }
    </style>
</head>

<body>
    <div class="mode">
        Dark mode:
        <span class="change">OFF</span>
    </div>

    <div>
       
        <h3>Light and Dark Mode</h3>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

</p>
        

        <p>
            Click on the switch on top-right
            to move to dark mode.
        </p>

    </div>

    <script>
        $(".change").on("click", function () {
            if ($("body").hasClass("dark")) {
                $("body").removeClass("dark");
                $(".change").text("OFF");
            } else {
                $("body").addClass("dark");
                $(".change").text("ON");
            }
        });
    </script>
</body>

</html>
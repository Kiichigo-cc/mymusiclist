console.log("index.js loaded...");

function sumbitForm() {
    var loginInfo = {}
    var keyOne = "username"
    var keyTwo = "password"
    console.log(document.getElementById('input-username').value.trim())
    userInput = document.getElementById('input-username').value.trim()
    passInput = document.getElementById('input-password').value.trim()

    if (!userInput || !passInput) {
        alert("Fill out username and password before submitting.");
    }
    else {
        loginInfo[keyOne] = userInput
        loginInfo[keyTwo] = passInput

        var reqUrl = '/list/mypage'

        fetch(reqUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })

        window.location.href = '/list'
    }

}

var gotoButton = document.getElementById('go-to-list-button');
if (gotoButton) {
    gotoButton.addEventListener('click', sumbitForm);
}

var homeButton = document.getElementById('home-button');
if (homeButton) {
    homeButton.addEventListener('click', function () {
        window.location.href = "/"
    });
}

var homeButton = document.getElementById('help-button');
if (homeButton) {
    homeButton.addEventListener('click', function () {
        alert("How to use this website:\n\nIn the main page, you can view all the music we have on the database. If you want to track your own music, you can log in at the top of the page. Then you will be sent to a page showing your music. You can click the red plus icon on that page which will bring you to an editor, where you can add music from the database to your own list.")
    });
}

var listButton = document.getElementById('list-button');
if (listButton) {
    listButton.addEventListener('click', function () {
        window.location.href = "/list"
    });
}

var addButton = document.getElementById('add-button');
if (addButton) {
    addButton.addEventListener('click', function () {
        window.location.href = "/add"
    });
}

function submitAdd(index) {
    var albumindex = [{ index }]
    if (confirm("Are you sure you want to add this album to your list?") == true) {
        alert("The album has been added to your list!")

        var reqUrl = "/add/addalbum"
        fetch(reqUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(albumindex)
        });
    }
    
}


var addtolistButton = document.getElementsByClassName("add-to-list-button")
if (addtolistButton) {
    for (var i = 0; i < addtolistButton.length; i++) {
        addtolistButton[i].addEventListener('click', function (i) {
            console.log('you clicked element ' + i);
            submitAdd(i);
        }.bind(null, i));
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (window.location.href.indexOf("/list") > 0) {
        console.log("list page loading")
        var loginText = document.getElementById("login-text")

        var succ;
        var reqUrl = "/list/logincheck"

        fetch(reqUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.text())
            .then((body) => {
                succ = parseInt(body);
                if (succ == "0") {
                    loginText.classList.remove("hidden");
                }
                else {
                    loginText.classList.add("hidden");
                }
            });
        
        
    }
}, false);
function openNavBar() {
    document.getElementById('body').style.overflow = 'hidden';
    document.getElementById("navO").style.width = "100%";
}

function closeNavBar() {
    document.body.style.overflow = 'visible';
    document.getElementById("navO").style.width = "0%";
}

function goTop() {

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function bookmark() {
    window.print();
}

function search() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    document.body.appendChild(x);
}
// **************************************
// ****** ANIMATING THE RECTANGLE *******

// function to animate the rectangle - vertically
function animateVertical(element, moveDown) {

    // store the parameter passed in
    var movingDown = moveDown;

    function moveVertical() {

        var rectStyle = window.getComputedStyle(element);
        // removing "px" from the string for the code to add 2 numbers instead of concatinating a String
        var rectTop = rectStyle.getPropertyValue("top").replace("px", "");

        // check if we're moving down
        if (movingDown) {

            // convert the string into a number and move down by 3 px
            element.style.top = (Number(rectTop) + 3) + "px";

            // check for position - if the element is off the screen; OUT OF BOUNDS!!
            if (Number(rectTop) >= window.innerHeight) {

                // if out of bounds, stop moving downwards!!!
                movingDown = false;
            }
        }

        // move up if we can't move down!!
        else {

            // convert the string into a number and move upwards by 3 px
            element.style.top = (Number(rectTop) - 3) + "px";

            // getting the height of the element
            var rectHeight = rectStyle.getPropertyValue("height").replace("px", "");

            // check for position - if the element is off the screen; OUT OF BOUNDS!!
            if (Number(rectTop) + Number(rectHeight) <= 0) {

                // if out of bounds at the top of the screen, move downwards!!!
                movingDown = true;
            }

        }

    }
    setInterval(moveVertical, 10);

} // end of animate vertical

// function to animate the rectangle - horizontally
function animateHorizontal(element, moveRight) {

    // store the parameter passed in
    var movingRight = moveRight;

    function moveHorizontal() {

        var rectStyle = window.getComputedStyle(element);
        // removing "px" from the string for the code to add 2 numbers instead of concatinating a string
        var rectSide = rectStyle.getPropertyValue("left").replace("px", "");

        // check if we're moving right
        if (movingRight) {

            // convert the string into a number and move right by 3 px
            element.style.left = (Number(rectSide) + 3) + "px";

            // check for position - if the elemnt is off the screen; OUT OF BOUNDS!!
            if (Number(rectSide) >= window.innerWidth) {

                // if out of bounds, stop moving right!!!
                movingRight = false;
            }
        }

        // move left if we cannot move right!!
        else {

            // convert the string into a number and move left by 3 px
            element.style.left = (Number(rectSide) - 3) + "px";

            // getting the width of the element
            var rectWidth = rectStyle.getPropertyValue("width").replace("px", "");

            // check for position - if the element is off the screen; OUT OF BOUNDS!!
            if (Number(rectSide) + Number(rectWidth) <= 0) {

                // if out of bounds to the right of the screen, move right!!!
                movingRight = true;
            }
        }

    }

    setInterval(moveHorizontal, 10);

}

// when the window is loaded, call the onSiteLoaded function!!
window.onload = onSiteLoaded;

// when the site is loaded, start these events!!
function onSiteLoaded() {

    var rect = document.getElementById("rectangle1");
    animateVertical(rect, true);

    var rect2 = document.getElementById("rectangle2");
    animateVertical(rect2, false);

    var rect3 = document.getElementById("rectangle3");
    animateHorizontal(rect3, true);

    var rect4 = document.getElementById("rectangle4");
    animateHorizontal(rect4, false);
}


// *************************************************
// ***************** HOME PAGE *********************

function setNavColor(par1, par2, par3) {
    document.getElementById("nav").style.backgroundColor = "rgb(" + par1 + "," + par2 + "," + par3 + ")";;
}

function changeIcon(index) {

    var pathStart = "";

    //make the paths relative to the sites folder if not index page
    if (!index) {
        pathStart = "../"
    }

    var ham = document.getElementById("hamMenu");
    ham.style.backgroundImage = `url(${pathStart}assets/media/menu_NO_white.png)`;

    ham.onmouseover = function() {
        ham.style.backgroundImage = `url(${pathStart}assets/media/menu_B.png)`;
    }
    ham.onmouseout = function() {
        ham.style.backgroundImage = `url(${pathStart}assets/media/menu_NO_white.png)`;
    };

    var search = document.getElementById("search");
    search.style.backgroundImage = `url(${pathStart}assets/media/search_NO-W.png)`;

    search.onmouseover = function() {
        search.style.backgroundImage = `url(${pathStart}assets/media/search_NO_B.png)`;
    }
    search.onmouseout = function() {
        search.style.backgroundImage = `url(${pathStart}assets/media/search_NO-W.png)`;
    }

    var pdf = document.getElementById("pdf");
    pdf.style.backgroundImage = `url(${pathStart}assets/media/pdf_W.png)`;

    pdf.onmouseover = function() {
        pdf.style.backgroundImage = `url(${pathStart}assets/media/pdf_B.png)`;
    }
    pdf.onmouseout = function() {
        pdf.style.backgroundImage = `url(${pathStart}assets/media/pdf_W.png)`;
    }

    var top = document.getElementById("top");
    top.style.backgroundImage = `url(${pathStart}assets/media/up_W.png)`;

    top.onmouseover = function() {
        top.style.backgroundImage = `url(${pathStart}assets/media/up_b.png)`;
    }
    top.onmouseout = function() {
        top.style.backgroundImage = `url(${pathStart}assets/media/up_W.png)`;
    }
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}


// ***************************** GRADIENT TESTING *************************************
// function onScroll() {

//     var gradientBox = document.getElementById("gradient");

//     //Take from https://css-tricks.com/how-i-put-the-scroll-percentage-in-the-browser-title-bar/
//     let scrollTop = window.scrollY;
//     let docHeight = document.body.offsetHeight;
//     let winHeight = window.innerHeight;
//     let scrollPercent = scrollTop / (docHeight - winHeight);
//     let scrollPercentRounded = Math.round(scrollPercent * 100);

//     gradientBox.style.backgroundImage = `linear-gradient(45deg, rgb(237, 110, 36) ${scrollPercentRounded}% ${scrollPercentRounded}%, rgb(255, 255, 255) ${scrollPercentRounded}% ${scrollPercentRounded}%)`;

//     // gradientBox.style.backgroundImage = `linear-gradient(45 deg, rgb(0, 0, 0,), rgb(255, 255, 255), ${scrollPercentRound})`;

//     // move the box with the page for testing
//     // gradientBox.style.top = (scrollTop + 200) + 'px';

//     console.log(scrollPercentRounded);

// }

window.onscroll = function() {
    // onScroll();
    onScrollBars();
}

// COPY THIS BEFORE THE CODE YOU ARE ADDING AND WRITE WHAT IT IS FOR
//**************************************************** */
//********************* ADDED ************************ */

function clamp(number, min, max) {
    return Math.max(min, Math.min(number, max));
}

function onScrollBars() {

    var colourBox = document.getElementById("placeholder");

    // can't find colour box, early out
    if (colourBox == null) {
        return;
    }

    //Take from https://css-tricks.com/how-i-put-the-scroll-percentage-in-the-browser-title-bar/
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);

    // move the box with the page for testing
    colourBox.style.top = (scrollTop + 200) + 'px';

    // create javascript objects to store colours + percentages based on the current scroll
    var yellow = { colour: 'rgb(246, 218, 72)', perc: clamp((scrollPercentRounded + 8.3) % 100, 0, 100) };
    var white = { colour: 'white', perc: clamp((scrollPercentRounded + 33.3) % 100, 0, 100) };
    var blue = { colour: 'rgb(119, 133, 172)', perc: clamp((scrollPercentRounded + 41.6) % 100, 0, 100) };
    var white2 = { colour: 'white', perc: clamp((scrollPercentRounded + 66.6) % 100, 0, 100) };
    var orange = { colour: 'rgb(226, 100, 42)', perc: clamp((scrollPercentRounded + 74.9) % 100, 0, 100) };
    var white3 = { colour: 'white', perc: clamp((scrollPercentRounded) % 100, 0, 100) };

    // add all the objects to a list
    var coloursList = [];
    coloursList.push(yellow);
    coloursList.push(white);
    coloursList.push(blue);
    coloursList.push(white2);
    coloursList.push(orange);
    coloursList.push(white3);

    // sort the list based on the percentage 
    coloursList.sort(function(a, b) {
        return a.perc - b.perc;
    });

    //set the background image gradient based on the values we calculated above
    colourBox.style.backgroundImage = `linear-gradient(45deg, 
        ${coloursList[0].colour} ${coloursList[0].perc}% ${coloursList[0].perc}%,
        ${coloursList[1].colour} ${coloursList[0].perc}% ${coloursList[1].perc}%, 
        ${coloursList[2].colour} ${coloursList[1].perc}% ${coloursList[2].perc}%, 
        ${coloursList[3].colour} ${coloursList[2].perc}% ${coloursList[3].perc}%, 
        ${coloursList[4].colour} ${coloursList[3].perc}% ${coloursList[4].perc}%,
        ${coloursList[5].colour} ${coloursList[4].perc}% ${coloursList[5].perc}%,
        ${coloursList[0].colour} ${coloursList[5].perc}%)`

    // for (let i = 0; i < coloursList.length; i++) {
    //     console.log(coloursList[i].colour + " " + coloursList[i].perc);
    //   }

}
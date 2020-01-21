//variable for if the nav is ope n
var opened = false;
//event listener listening to see if the hamberger menu is clicked and opens the nav
document.getElementById("openNav").addEventListener("click", function () {
    if (opened == false) {
        opened = true;
        document.getElementById("navBar").style.width = "25%";
        document.getElementById("classContent").style.marginLeft = "28%";

    }
    else {
        opened = false;
        document.getElementById("navBar").style.width = "0";
        document.getElementById("classContent").style.marginLeft = "4%";

    }
})

//function that the input on the home page uses to search and filter the table
function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchBar");
    filter = input.value.toUpperCase();
    table = document.getElementById("studentTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    }
}
/*big group of functions that disply content when their respective box is clicked on the course work page
this is bit of a "brute force" method, im sure theres a way to use only one function and just change the values with if statements but i couldn't figure it out
*/
var grade, room, name;
function openWorkELA() {
    grade = 85;
    room = "Mr. Bruckshaw";
    name = "Essay";
    document.getElementById("assignInfo").innerHTML = "class: " + room + "<br/>" + "grade: " + grade + "<br/>" + "Assignement: " + name;
}
function openWorkFrench() {
    grade = "NA";
    room = "NA";
    name = "NA";
    document.getElementById("assignInfo").innerHTML = "class: " + room + "<br/>" + "grade: " + grade + "<br/>" + "Assignement: " + name;
}
function openWorkMath() {
    grade = "NA";
    room = "NA";
    name = "NA";
    document.getElementById("assignInfo").innerHTML = "class: " + room + "<br/>" + "grade: " + grade + "<br/>" + "Assignement: " + name;
}
function openWorkGeo() {
    grade = 90;
    room = "Mr. Chaput";
    name = "Water Test";
    document.getElementById("assignInfo").innerHTML = "class: " + room + "<br/>" + "grade: " + grade + "<br/>" + "Assignement: " + name;
}
function openWorkCS() {
    grade = "like 12";
    room = "Mr. Hardman";
    name = "Final Project";
    document.getElementById("assignInfo").innerHTML = "class: " + room + "<br/>" + "grade: " + grade + "<br/>" + "Assignement: " + name;
}
function openWorkGym() {
    grade = "basketball";
    room = "Gym teacher";
    name = "Dodgeball";
    document.getElementById("assignInfo").innerHTML = "class: " + room + "<br/>" + "grade: " + grade + "<br/>" + "Assignement: " + name;
}
//page breaks if you use edge so this function forces you to either use chrome or install it to use the page
window.addEventListener("load", function(){
    if( navigator.userAgent.indexOf("Edge") != -1){
        if(this.confirm("Stop using edge")){
            window.location.href = "https://www.google.ca/chrome/?brand=CHBF&ds_kid=43700017722575264&utm_source=bing&utm_medium=cpc&utm_campaign=1008138%20%7C%20Chrome%20Win10%20%7C%20DR%20%7C%20ESS01%20%7C%20NA%20%7C%20CA%20%7C%20en%20%7C%20Desk%20%7C%20BING%20SEM%20%7C%20BKWS%20~%20Exact&utm_term=download%20chrome&utm_content=Download%20-%20Exact&gclid=CLLB_7WWlecCFc-sxQIdtWAMtg&gclsrc=ds";

        }
        else{
            window.location.href = "https://www.google.ca/chrome/?brand=CHBF&ds_kid=43700017722575264&utm_source=bing&utm_medium=cpc&utm_campaign=1008138%20%7C%20Chrome%20Win10%20%7C%20DR%20%7C%20ESS01%20%7C%20NA%20%7C%20CA%20%7C%20en%20%7C%20Desk%20%7C%20BING%20SEM%20%7C%20BKWS%20~%20Exact&utm_term=download%20chrome&utm_content=Download%20-%20Exact&gclid=CLLB_7WWlecCFc-sxQIdtWAMtg&gclsrc=ds";
        }
    }
})




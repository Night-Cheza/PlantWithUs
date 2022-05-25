// @ts-nocheck

var xhr;
var fName;
var lName;
var address;
var pCode;
var phNum;
var email;
const pi = 3.14;

function getCubes() {
    xhr = new XMLHttpRequest();

    fName = document.getElementById("fName").value;
    lName = document.getElementById("lName").value;
    address = document.getElementById("address").value;
    pCode = document.getElementById("pCode").value;
    phNum = document.getElementById("phone").value;
    email = document.getElementById("email").value;

    if (fName.length == 0 || lName.length == 0 || address.length == 0 || pCode.length == 0 || phNum.length == 0 || email.length == 0) {
        alert("Please fill your information first");
    } else {
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById("display").innerHTML = xhr.responseText;
                document.getElementById("display").scrollIntoView();
            }
        };
        xhr.open("GET", "cubes.html", true);
        xhr.send();
    }
}    

function getCylinders() {
    xhr = new XMLHttpRequest();

    fName = document.getElementById("fName").value;
    lName = document.getElementById("lName").value;
    address = document.getElementById("address").value;
    pCode = document.getElementById("pCode").value;
    phNum = document.getElementById("phone").value;
    email = document.getElementById("email").value;

    if (fName.length == 0 || lName.length == 0 || address.length == 0 || pCode.length == 0 || phNum.length == 0 || email.length == 0) {
        alert("Please fill your information first");
    } else {
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById("display").innerHTML = xhr.responseText;
                document.getElementById("display").scrollIntoView();
            }
        };
        xhr.open("GET", "cylinders.html", true);
        xhr.send();
    }
}

function getSpherical() {
    xhr = new XMLHttpRequest();

    fName = document.getElementById("fName").value;
    lName = document.getElementById("lName").value;
    address = document.getElementById("address").value;
    pCode = document.getElementById("pCode").value;
    phNum = document.getElementById("phone").value;
    email = document.getElementById("email").value;

    if (fName.length == 0 || lName.length == 0 || address.length == 0 || pCode.length == 0 || phNum.length == 0 || email.length == 0) {
        alert("Please fill your information first");
    } else {
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById("display").innerHTML = xhr.responseText;
                document.getElementById("display").scrollIntoView();
            }
        };
        xhr.open("GET", "spherical.html", true);
        xhr.send();
    }
}

function getCones() {
    xhr = new XMLHttpRequest();

    fName = document.getElementById("fName").value;
    lName = document.getElementById("lName").value;
    address = document.getElementById("address").value;
    pCode = document.getElementById("pCode").value;
    phNum = document.getElementById("phone").value;
    email = document.getElementById("email").value;

    if (fName.length == 0 || lName.length == 0 || address.length == 0 || pCode.length == 0 || phNum.length == 0 || email.length == 0) {
        alert("Please fill your information first");
    } else {
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById("display").innerHTML = xhr.responseText;
                document.getElementById("display").scrollIntoView();
            }
        };
        xhr.open("GET", "cones.html", true);
        xhr.send();
    }
}

function displayCubeRes() {
    fName = document.getElementById("fName").value;
    lName = document.getElementById("lName").value;
    address = document.getElementById("address").value;
    pCode = document.getElementById("pCode").value;
    phNum = document.getElementById("phone").value;
    email = document.getElementById("email").value;
    var planter = "Square/Rectangular Planter";
    var price = 0;
    var ordered = "";
    var custInfo = "";

    var cubeLength = document.getElementById("cubeLength").value;
    var cubeWidth = document.getElementById("cubeWidth").value;
    var cubeHeight = document.getElementById("cubeHeight").value;

    var volume = cubeLength * cubeWidth * cubeHeight;
    price = 0.001 * volume;

    custInfo = (fName + " " + lName + "<br/>" + address + "<br/>" + pCode);

    ordered = (custInfo + "<br/><br/>" + planter + "<br/>" + "Dimensions: " + cubeLength + "cm x " + cubeWidth + "cm x " + cubeHeight + "cm" + "<br/>" + "Volume: " + volume.toFixed(2) + "cm" + "<sup>3</sup>" + "<br/>" + "Total cost: $" + price.toFixed(2));

    document.getElementById("displayOrder").innerHTML = ordered;

    document.getElementById("displayOrder").scrollIntoView();
}

function displayCylRes() {
    fName = document.getElementById("fName").value;
    lName = document.getElementById("lName").value;
    address = document.getElementById("address").value;
    pCode = document.getElementById("pCode").value;
    phNum = document.getElementById("phone").value;
    email = document.getElementById("email").value;
    var planter = "Flat Bottomed Cylinder Planter";
    var price = 0;
    var ordered = "";
    var custInfo = "";

    var cylRadius = document.getElementById("cylRadius").value;
    var cylHeight = document.getElementById("cylHeight").value;

    var volume = pi * Math.pow(cylRadius, 2) * cylHeight;
    price = 0.0012 * volume;

    custInfo = (fName + " " + lName + "<br/>" + address + "<br/>" + pCode);

    ordered = (custInfo + "<br/><br/>" + planter + "<br/>" + "Dimensions: " + cylRadius + "cm x " + cylHeight + "cm " + "<br/>" + "Volume: " + volume.toFixed(2) + "cm" + "<sup>3</sup>" + "<br/>" + "Total cost: $" + price.toFixed(2));

    document.getElementById("displayOrder").innerHTML = ordered;

    document.getElementById("displayOrder").scrollIntoView();
}

function displayConRes() {
    fName = document.getElementById("fName").value;
    lName = document.getElementById("lName").value;
    address = document.getElementById("address").value;
    pCode = document.getElementById("pCode").value;
    phNum = document.getElementById("phone").value;
    email = document.getElementById("email").value;
    var planter = "Truncated Cone Planter";
    var price = 0;
    var ordered = "";
    var custInfo = "";

    var conRadius1 = document.getElementById("conRadius1").value;
    var conRadius2 = document.getElementById("conRadius2").value;
    var conHeight = document.getElementById("conHeight").value;

    var volume = 1/3 * pi * (Math.pow (conRadius1, 2) + conRadius1 * conRadius2 + Math.pow(conRadius2, 2)) * conHeight;
    price = 0.002 * volume;

    custInfo = (fName + " " + lName + "<br/>" + address + "<br/>" + pCode);
    
    ordered = (custInfo + "<br/><br/>" + planter + "<br/>" + "Dimensions: " + conRadius1 + "cm x " + conRadius2 + "cm x " + conHeight + "cm" + "<br/>" + "Volume: " + volume.toFixed(2) + "cm" + "<sup>3</sup>" + "<br/>" + "Total cost: $" + price.toFixed(2));

    document.getElementById("displayOrder").innerHTML = ordered;

    document.getElementById("displayOrder").scrollIntoView();
}

function displaySphRes() {
    fName = document.getElementById("fName").value;
    lName = document.getElementById("lName").value;
    address = document.getElementById("address").value;
    pCode = document.getElementById("pCode").value;
    phNum = document.getElementById("phone").value;
    email = document.getElementById("email").value;
    var planter = "½ Spherical Planter";
    var price = 0;
    var ordered = "";
    var custInfo = "";

    var sphRadius = document.getElementById("sphRadius").value;
    var volume = 1/2 * (4/3 * pi * Math.pow (sphRadius, 3));

    price = 0.0015 * volume;

    custInfo = (fName + " " + lName + "<br/>" + address + "<br/>" + pCode);

    ordered = (custInfo + "<br/><br/>" + planter + "<br/>" + "Dimensions: " + sphRadius + "cm " + "<br/>" + "Volume: " + volume.toFixed(2) + "cm" + "<sup>3</sup>" + "<br/>" + "Total cost: $" + price.toFixed(2));

    console.log(fName);

    document.getElementById("displayOrder").innerHTML = ordered;

    document.getElementById("displayOrder").scrollIntoView();
}
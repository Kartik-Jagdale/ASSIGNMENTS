

let obj = {};
let store = {};
let totalAmount=0.0;

dashboard();

function dashboard() {
    let role = prompt("Are you Customer or Admin");

    if (role == "customer") {
        showMenu();
        buyCloths();
    }
    else if (role == "admin") {
        authentication();
    }
    else {
        alert("Enter a valid details");
        dashboard();
    }
}

function authentication() {

    let userId = prompt("Enter your admin ID");
    let pass = prompt("Enter your passsword");

    if (userId != 'admin' && pass != 'pass') {
        alert("Enter valid details");
        dashboard();
    }
    adminDshboard();
}

function addMenu() {
    let cloth = prompt("Enter cloth name");
    let price = prompt("Enter price of cloth");

    obj[cloth] = Number(price);

    let ans = prompt("Are you want to add more? \n 1 for yes \n 2 for no");
    if (ans == '1') addMenu();
    if (ans == '2') adminDshboard();

}

function showMenu() {
    alert("Hello Sir");

    for (const key in obj) {
        alert(key+ " = "+obj[key] + " rs");
    }
}

function buyCloths() {
    let cloth = prompt("Enter cloth name");
    let count = prompt("Enter count of cloth");

    store[cloth] = Number(count);

    let ask = prompt("Do you want to buy more? \n 1 for yes \n 2 for no");
    if (ask == '1') buyCloths();
    if (ask == '2') bill();
}

function adminDshboard() {
    let action = prompt("1 = Add cloths in menu \n 2 = Update the data of cloths \n 3 = Logout");
    if (action == 1) {

        addMenu();

    }
    else if (action == 3) {
        dashboard();
    }

}

function bill() {

   console.log(store)
   console.log(obj)
    for (const key in store) {
            if(key in store && key in obj)
            totalAmount = totalAmount + (obj[key] * store[key]);
        
    }

    alert("TotalAmount of bill to be paid = " + totalAmount);
    alert("Thank you so much....visit again!")
}
function myFunction() {


    var toppings = [
        ["1","1396/12/3","اینترنت", "رسیدگی شده"]
        ,["2", "1397/01/20","غذا", "رسیدگی شده"]
        ,["3","1396/12/3","سرویس", "در حال رسیدگی "]
        ,["4","1396/12/3","حراست ", "رسیدگی نشده"]
    ];

    var table = document.getElementById("table1");

    for (var i = 0; i < toppings.length; i++) {
        // var topping = toppings[i];
        var rowItem = document.createElement("tr");
        // rowItem.id="rowItem";
        for (var j = 0; j < 4; j++){
            var tableItem = document.createElement("td");
            tableItem.textContent= toppings[i][j];
            rowItem.appendChild(tableItem);
        }

        // listItem.textContent = topping;
        // listItem.className = "cases-item-li";
        // ul.appendChild(listItem);
        table.appendChild(rowItem);
    }

}
function date(){
    n = new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    h=n.getHours();
    min=n.getMinutes();
    document.getElementById("date-time").innerHTML = m + "/" + d + "/" + y +"&nbsp &nbsp &nbsp" + h+" : "+min;
}

function show() {
    var elem = document.getElementById("verNav");
    elem.style.display = "block";
    document.getElementById("menubar").style.display="none";
}
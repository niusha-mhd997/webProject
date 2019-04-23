function f() {


    var toppings = ["مورد اول", "مورد دوم", "مورد سوم",
        "مورد چهارم", "مورد پنجم", "مورد ششم", "مورد هفتم"];

    var ul = document.getElementById("cases-item");

    for (var i = 0; i < toppings.length; i++) {
        var topping = toppings[i];
        var listItem = document.createElement("li");
        listItem.textContent = topping;
        listItem.className = "cases-item-li";
        ul.appendChild(listItem);
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
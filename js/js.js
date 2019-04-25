
// var s = $.getJSON('students.json');
//
// var data = JSON.parse(s);
// console.log(data);
// document.getElementById('list').innerHTML=data.firstName+ " "+ data.lastname;

function date(){
    n = new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    h=n.getHours();
    min=n.getMinutes();
    document.getElementById("date-time").innerHTML = m + "/" + d + "/" + y +"&nbsp &nbsp &nbsp" + h+" : "+min;
}
$(document).ready(function() {
    $.getJSON('javascript/students.json', function(jd) {


        // $('#number').html('<li>' + jd.name + '</li>');
        // $('#number').html('<li>' + jd.age + '</li>');
    for(var i=0;i<jd.length;i++){
        alert(jd[i].name);
    }

    });
});


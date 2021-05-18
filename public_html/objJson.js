$(function () {
    $("#OK").click(ment);
    $("#TOROL").click(torles);
    kiir();


    


});
var termekek = '[{"tnev":"Dixit","ar":"7000","tipus":"társasjáték"},{"nev":"uno","ar":"500","tipus":"kártyajáték"}]';
var termekek =
[
    {
    tnev:"Dixit",
    ar:"7000",
    tipus:"társasjáték"

    },
    {
    tnev:"uno",
    ar:"500",
    tipus:"kártyajáték"
    }
];

function torles(){
    
}

function ment() {
    var ujtermek= {};
    ujtermek.tnev = $("#nev").val();
    ujtermek.ar = $("#ar").val();
    if ($("input:radio[name=tipus]:checked").val() === "t") {
        ujtermek.tipus = "Társasjáték";
    } else {
        ujtermek.tipus = "Kártyajáték";
    }
    console.log(ujtermek);
    termekek.push(ujtermek);
    console.log(termekek);
    kiir();
}
function kiir() {
    $("article").empty();
    $("article").append("<table>");
    $("article table").append("<tr><th>Termék neve: </th><th>Ár: </th><th> Fajta: </th><th> Törlés: </th></tr>");
    console.log(termekek.length);
    for (var i = 0; i < termekek.length; i++) {
        console.log(termekek);
        $("article table").append("<tr><td>" + termekek[i].tnev  + "</td><td>" + termekek[i].ar + "</td><td>" + termekek[i].tipus + "</td><td>"+"<input type='button' id='TOROL' name='TOROL' value='TÖRÖL'>"+"</td></tr>");
    
}
}


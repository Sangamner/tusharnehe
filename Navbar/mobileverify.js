var first=JSON.parse(localStorage.getItem("information"))
    console.log(first)
    document.getElementById("name").innerText=first[first.length-1].first;


    var mobileno =JSON.parse(localStorage.getItem("mobile"))
    console.log(mobileno);
    document.getElementById("entercode").innerText=mobileno[mobileno.length-1].first
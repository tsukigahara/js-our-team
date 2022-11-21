const team = [
    {
        "name" : "Wayne Barnett",
        "job" : "Founder & CEO",
        "img" : "wayne-barnett-founder-ceo.jpg"
    },
    {
        "name" : "Angela Caroli",
        "job" : "Chief Editor",
        "img" : "angela-caroll-chief-editor.jpg"
    },
    {
        "name" : "Walter Gordon",
        "job" : "Office Manager",
        "img" : "walter-gordon-office-manager.jpg"
    },
    {
        "name" : "Angela Lopez",
        "job" : "Social Media Manager",
        "img" : "angela-lopez-social-media-manager.jpg"
    },
    {
        "name" : "Scott Estrada",
        "job" : "Developer",
        "img" : "scott-estrada-developer.jpg"
    },
    {
        "name" : "Barbara Ramos",
        "job" : "Graphic designer",
        "img" : "barbara-ramos-graphic-designer.jpg"
    },
]

//check obj on console
for (let key in team){
    console.log(team[key]);
}

//Create BS5 cards
var div1 = document.createElement("div");
div1.classList.add("row");
div1.classList.add("row-cols-1");
div1.classList.add("row-cols-md-3");
div1.classList.add("g-4");
let containerHTML = document.getElementById("containerID");
containerHTML.append(div1);
for(let i = 0; i < team.length; i++){
    let div2 = document.createElement("div");
    div2.classList.add("col");
    div1.append(div2);
    let div3 = document.createElement("div");
    div3.classList.add("card");
    div3.classList.add("text-center");
    div2.append(div3);
    let imgtag = document.createElement("img");
    imgtag.classList.add("card-img-top");
    imgtag.setAttribute("alt", "image");
    imgtag.setAttribute("id", "imgID-"+i);
    div3.append(imgtag);
    let div4 = document.createElement("div");
    div4.classList.add("card-body");
    div3.append(div4);
    let h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.setAttribute("id", "nameID-"+i);
    div4.append(h5);
    let p = document.createElement("p");
    p.classList.add("card-text");
    p.setAttribute("id", "jobID-"+i);
    div4.append(p);
}

//add info to cards
for(let i = 0; i < team.length; i++){
    var imgHTML = document.getElementById("imgID-"+i);
    var nameHTML = document.getElementById("nameID-"+i);
    var jobHTML = document.getElementById("jobID-"+i);
    imgHTML.setAttribute("src", "img/"+team[i].img);
    nameHTML.innerHTML = team[i].name;
    jobHTML.innerHTML = team[i].job;
}

function addWorkExp() //adding new field
{
    let newField = document.createElement("textarea")
    newField.classList.add("form-control")
    newField.classList.add("weField")
    newField.classList.add("mt-2")
    newField.setAttribute("rows",3)
    newField.setAttribute("placeholder",'Enter Here')

    let weButtonOb = document.getElementById("weButton"); //to add new field before the add button
    let weOb = document.getElementById("we"); //to add field inside the work experience

    weOb.insertBefore(newField,weButtonOb)  //two parameters(what to insert,before whom)
}

function addAQ(){

    let newField = document.createElement('textarea')
    newField.classList.add("form-control")
    newField.classList.add("aqField")
    newField.classList.add("mt-2")
    newField.setAttribute("rows",3)
    newField.setAttribute("placeholder",'Enter Here')

    let aqButtonOb = document.getElementById("aqButton")
    let aqOb = document.getElementById("aq")

    aqOb.insertBefore(newField,aqButtonOb)
    

}

//generating CV

function generateCV()
{
    let nameFieldObj = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1")

    nameT1.innerHTML = nameFieldObj

    document.getElementById("nameT2").innerHTML = nameFieldObj

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value

    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value

    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value

    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value

    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value

    document.getElementById("objT").innerHTML = document.getElementById("objectiveField").value

    let wes = document.getElementsByClassName("weField")
    let str = ""

    for (let e of wes) {

        str= str+`<li> ${e.value} </li>`;
        
    }

    document.getElementById("weT").innerHTML = str



    let aqs = document.getElementsByClassName("aqField")
    let str1 = ""

    for (let a of aqs) {

        str1= str1+`<li> ${a.value} </li>`;
        
    }

    document.getElementById("aqT").innerHTML = str1

    //document.getElementById("cv").style.display = "none";
    //document.getElementById("temp").style.display = "block";

}

function printCV()
{
    window.print();

}


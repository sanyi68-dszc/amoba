label1=document.createElement("label")
label1.innerHTML="SOR RÉNDZS"
document.body.appendChild(label1)

input1=document.createElement("input")
input1.type="range"
input1.id="sorRéndzs"
input1.min=3
input1.max=10
input1.value=3
input1.addEventListener("change",sorValtoz1)
document.body.appendChild(input1)

span1=document.createElement("span")
span1.innerHTML=`${document.getElementById("sorRéndzs").value}`
function sorValtoz1(){
    span1.innerHTML=`${document.getElementById("sorRéndzs").value}`
}
document.body.appendChild(span1)

br1=document.createElement("br")
document.body.appendChild(br1)

label2=document.createElement("label")
label2.innerHTML="OSZLOP RÉNDZS"
document.body.appendChild(label2)

input2=document.createElement("input")
input2.type="range"
input2.id="oszlopRéndzs"
input2.min=3
input2.max=10
input2.value=3
input2.addEventListener("change",sorValtoz2)
document.body.appendChild(input2)

span2=document.createElement("span")
span2.innerHTML=`${document.getElementById("oszlopRéndzs").value}`
function sorValtoz2(){
    span2.innerHTML=`${document.getElementById("oszlopRéndzs").value}`
}
document.body.appendChild(span2)

br2=document.createElement("br")
document.body.appendChild(br2)

button1=document.createElement("button")
button1.innerHTML="GOOOOOMB! :3"
button1.addEventListener("click",tablazatLetrehoz)
document.body.appendChild(button1)

p1=document.createElement("p")
document.body.appendChild(p1)

div1=document.createElement("div")
document.body.appendChild(div1)

karakter="x"
szin="red"
function tablazatLetrehoz(){
    karakter="x"
    szin="red"
    p1.innerHTML=`Sorok száma: ${input1.value}; Oszlopok száma: ${input2.value}`
    div1.innerHTML=""
    table=document.createElement("table")
    div1.appendChild(table)
    sorszam=parseInt(input1.value)
    oszlopszam=parseInt(input2.value)
    for (let i = 0; i < sorszam; i++) {
        tr=document.createElement("tr")
        table.appendChild(tr)
        for (let j = 0; j < oszlopszam; j++) {
            let td=document.createElement("td")
            td.style.border="1px solid black"
            td.style.padding="20px"
            td.style.borderCollapse="collapse"
            tr.appendChild(td)
            td.innerHTML="&nbsp;&nbsp;"
            td.id=`${i}-${j}`
            td.sor=`${i}`
            td.oszlop=`${j}`
            td.addEventListener("click",()=>kattintas(td))
        }
    }
}
function kattintas(elem){
    if(elem.innerHTML=="&nbsp;&nbsp;"){
        Swal.fire(`${elem.sor};${elem.oszlop}`)
        elem.innerHTML=`<span style="color:${szin}">${karakter}</span>`
        if(karakter=="x"){
            karakter="o"
            szin="blue"
        }
        else{
            karakter="x"
            szin="red"
        }
    }
}
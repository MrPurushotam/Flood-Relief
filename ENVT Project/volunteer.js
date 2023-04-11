let x
let y=document.querySelector(".link")
let z=document.querySelector(".text")
let xyz=document.querySelector(".data")
data={
    article:["https://www.ltrr.arizona.edu/~katie/kt/pdfs/Flood-Hydroclimaotlogy-new-scan.pdf","files\Flood-Report.pdf"],
    text:['Article Related to Flood Hydroclimatology','Flood Report by Niti Ayog'],
    image:["./IMAGE AND VIDEO/11.jpg","./IMAGE AND VIDEO/12.jpg"]
}
for( let i=0;i<data.article.length;i++){
    // y.setAttribute('href',data.article[i])  
    // z.textContent=data.text[i]
    // console.log()
    // console.log(z.textContent)
    let div=document.createElement("div") //create element div
    div.setAttribute("class","box")//names the class
    xyz.appendChild(div)//appends the div in data div

    let link=document.createElement("a")//makes new element a
    link.setAttribute("class","link")// add link class to it
    link.setAttribute("href",data.article[i])//adds link to it 
    link.setAttribute("target","_blank")
    document.querySelector(".box").appendChild(link)// appends it in 

    let extract=document.querySelector(".link")//uses a element 

    let img=document.createElement("img")// new img element created
    img.setAttribute("src",data.image[i])//data src added in it 
    img.setAttribute("class","image")//class set to image
    extract.appendChild(img)//appended element to a

    let text=document.createElement("h3")//created new element h3
    text.setAttribute("class","text")// class added
    text.textContent=data.text[i]// text added in it
    document.querySelector(".box").appendChild(text)
}

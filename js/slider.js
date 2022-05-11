let image=localStorage.getItem("images")
if(image){
	image=JSON.parse(image)
	console.log(image)
}

const prev=document.createElement("button")
prev.innerHTML="prev"
prev.addEventListener("click",P)
document.body.append(prev)

const img=document.createElement("img")
img.setAttribute("src",image[0])
img.classList.add("design")
document.body.append(img)

const next=document.createElement("button")
next.innerHTML="next"
next.addEventListener("click",N)
document.body.append(next)

let i=0
function N(){
    i++
    if(i==image.length){
	i=0
}
    document.querySelector(".design").setAttribute("src",image[i])
}

function P(){
    i--
    if(i<0){
  	    i=image.length-1
 	}
    document.querySelector(".design").setAttribute("src",image[i])
}
setInterval(function(){
 i++
 if(i==image.length){
    i=0
 }
img.setAttribute("src",image[i])

},2000)

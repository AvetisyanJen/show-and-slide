
const imgs=document.querySelectorAll(".images>img")
imgs.forEach(el=>el.addEventListener("click",F1))
	function F1(){
		this.classList.toggle("active")
	}
const show=document.querySelector(".show")
show.addEventListener("click",function(){
	let elements=document.querySelectorAll(".active")
	console.log(elements)
	let address=[]
	elements.forEach(el=>address.push(el.getAttribute("src")))
	console.log(address)
    // JSON.stringify() darcnum e toxayin tip
    //JSON.parse() hanum e toxayin tipic
   localStorage.setItem("images",JSON.stringify(address))
   location.href="slider.html"
})	
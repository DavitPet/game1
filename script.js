let array = ["տուն", "ձմերուկ", "տղայ", "աղջիկ", "մանուկ", "դպրոց", "գնդակ", "արծիւ", "սեղան", "փիղ", "կատու", "շուն", "հիւանդանոց", "այբուբեն", "եռանկիւն", "շրջան", "քառակուսի", "հինգ", "ութ", "բժիշկ", "ձեռն", "լեառն"]

let id = Math.round(Math.random() * array.length-1)

console.log(id, array[id])

document.getElementById("word").innerHTML = array[id].slice(1)

document.getElementById("img").src = "images/"+array[id]+".png"

document.getElementById("form").addEventListener('submit', (event) => {

	if (document.getElementById("input").value != array[id].slice(0, 1)) {
		event.preventDefault()
	}
})
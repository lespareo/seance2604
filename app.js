function app () {
	document.querySelector('body').onclick = appendText
}

function appendText (e) {
	e.target.innerHTML = e.target.innerHTML + 'blabla'
}

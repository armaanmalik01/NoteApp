const newnotebtn = document.getElementById("new-note-btn");
const notes_output = document.getElementById("notes-container");
const cancelbtn = document.getElementById('cancel-btn');
const savebtn = document.getElementById("save-btn");
const popup = document.getElementById("new-note-parent");
const title_input = document.getElementById("title");
const body_input = document.getElementById("body");
const new_note_box = document.getElementById("new-note");

function cancel() {
	popup.style.display = 'none';
	title_input.value = '';
	body_input.value = '';
	document.body.style.height = 'auto';
	document.body.style.overflow = 'auto'
	new_note_box.style.bottom = "-2%";
}


function newnote() {
	popup.style.display = 'grid';
	setTimeout(()=>{
		new_note_box.style.bottom = "0%";
	},10)
	document.body.style.height = '100vh';
	document.body.style.overflow = 'hidden';

}


function deleteNote(e) {
	notes_output.removeChild(e.parentNode.parentNode)
}


function save() {
	if(!title_input.value || !body_input.value ) {
		return alert("Please Fill Form");
	}
	let div = document.createElement("div");
	div.classList.add("note");
	div.innerHTML = `
					<p class="note-title">${title_input.value}</p>
					<div class="note-body">
						<p>${body_input.value}</p>
					</div>
					<div class="control-btns">
						
						<button  onclick="deleteNote(this)"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg><span>DELETE</span></button>
					</div>`

	notes_output.appendChild(div);
	cancel();
}



newnotebtn.onclick = newnote;
savebtn.onclick = save;
cancelbtn.onclick = cancel;
function setEventListner() {
	const controlBtn = document.getElementById("ctrl-btn");

	//this event add the open the control model box
	controlBtn.addEventListener("click", () => {
		const modelElement = document.querySelector(".model");

		modelElement.style.display = "flex";
	});
	//
	const closeButton = document.getElementById("close-model");
	//close the model box
	closeButton.addEventListener("click", () => {
		const modelElement = document.querySelector(".model");
        
		modelElement.style.display = "";
	});
}

setEventListner();

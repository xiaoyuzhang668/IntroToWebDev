function drawTriangle(size) {

	for (let count = 1; count <= size; count++) {
		let triangle = "";
		for (let i = 0; i < count; i++) {
			triangle += "*";
		}
		console.log(triangle);
	}
}

drawTriangle(4);

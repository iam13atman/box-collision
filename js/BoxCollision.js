// Main Application File
function BoxCollision(elementId){
	var element = document.getElementById(elementId);

	this.init = function (){
		var container = new Container();
		container.create();

		var boxes = [];
		
		// Instantisation
		var box1 = new Box(0, 0, 'blue');
		var box2 = new Box(500, 0, 'yellow');
		var box3 = new Box(500, 300, 'green');

		boxes.push(box1);
		boxes.push(box2);
		boxes.push(box3);

		// Creating Boxes
		box1.create();
		box2.create();
		box3.create();

		container.append(box1.element);
		container.append(box2.element);
		container.append(box3.element);


		element.appendChild(container.element);

		//Animation
		var animation = new Animation(boxes, container);
		animation.animate();

	};
}

var boxCollision = new BoxCollision('ball-collision');
boxCollision.init();
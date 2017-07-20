function Animation(boxes, container){
	var that = this;

	this.intervalId;
	this.boxes = boxes;
	this.container = container;

	this.animate = function (){
		this.intervalId = setInterval (function(){
			that.boxes.forEach(function (box, index){
				that.move(box, index);
				// that.checkBoxCollision();
				for(var i=0;i<that.boxes.length;i++){
					 for(var j=0;j<i;j++){
				 		that.checkBallCollision(that.boxes[j], that.boxes[i]);
				 	}
	 			}
				
				that.checkWallCollision(box);
			});
		}, 1000 / 60);

	};


	this.move = function (box, index){
		if(index % 2 == 0){
			box.moveHorizontally();
		}else if(index % 3 == 0){
			box.moveVertically();
		}else{
			box.moveVertically();
		}
	};

	this.checkWallCollision = function (box){
		// Horizontal Collision
		if(box.x + box.width >= this.container.width || box.x < 0){
			box.direction *= -1;
		}

		// Vertical Collision
		if(box.y + box.height >= this.container.height || box.y < 0){
			box.direction *= -1;
		}
	};

	this.checkBallCollision = function (nodeOne, nodeTwo) {
		
		if (nodeOne.x <= nodeTwo.x + nodeTwo.width &&
			nodeOne.x + nodeOne.width >= nodeTwo.x &&
			nodeOne.y <= nodeTwo.y + nodeTwo.height &&
			nodeOne.height + nodeOne.y >= nodeTwo.y) {
    
			nodeOne.direction *= -1;
			nodeTwo.direction *= -1;
		}
			
	}

	// this.checkBallCollision = function () {
	// 	for(var i=0; i<that.boxes.length; i++){
	// 		for(var j=that.boxes.length-1; j>=0; j--){
	// 			if( i != j ){
	// 				nodeOne = that.boxes[i];
	// 				nodeTwo = that.boxes[j];

	// 				if (nodeOne.x < nodeTwo.x + nodeTwo.width &&
	// 					nodeOne.x + nodeOne.width > nodeTwo.x &&
	// 					nodeOne.y < nodeTwo.y + nodeTwo.height &&
	// 					nodeOne.height + nodeOne.y > nodeTwo.y) {

	// 					nodeOne.direction *= -1;
	// 					nodeTwo.direction *= -1;
	// 				}
	// 			}	
	// 		}
	// 	}
			
	// }

	// this.checkBoxCollision = function (){
	// 	for(var i=0; i<that.boxes.length; i++){
	// 		for(var j=that.boxes.length-1; j>=0; j--){

	// 			var x = that.boxes[i].x;
	// 			var y = that.boxes[i].y;
	// 			var a = that.boxes[j].x;
	// 			var b = that.boxes[j].y;
				
	// 			var xWithWidth = that.boxes[i].x + that.boxes[i].width;
	// 			var yWithHeight = that.boxes[i].y + that.boxes[i].height;
	// 			var aWithWidth = that.boxes[j].x + that.boxes[j].width;
	// 			var bWithHeight = that.boxes[j].y + that.boxes[j].height;
	
	// 			if( xWithWidth > a && x < aWithWidth &&  y < bWithHeight && bWithHeight > y
	// 				// Left and Right Face Collision
	// 				// ((y >= b && y <= bWithHeight) && (bWithHeight >= y && bWithHeight <= yWithHeight)) ||
	// 				// Top Face Collision
	// 				// ((x >= a && x <= aWithWidth) && (aWithWidth >= x && aWithWidth <= xWithWidth)) ||
	// 				// // Bottom Face Collision
	// 				// ((xWithWidth >= a && xWithWidth <= aWithWidth) && (a >= x && a <= xWithWidth))
	// 				){
	// 				// console.log('collision');
	// 				that.boxes[i].direction *= -1;
	// 				that.boxes[j].direction *= -1;
	// 			}
			
	// 		}
	// 	}
	// } 

}
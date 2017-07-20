function Box(x, y, color){
	this.x = x || 0;
	this.y = y || 0;
	
	this.width = 100;
	this.height = 100;
	this.velocity = 10;
	this.direction = 1; 
	this.bgColor = color || 'blue';
	this.position = 'absolute';

	this.element;

	this.create = function (){
		this.element = document.createElement('div');

		this.setPosition(this.x, this.y);

		this.element.style.width = this.width+'px';
		this.element.style.height = this.height+'px';
		this.element.style.position = this.position;
		this.element.style.background = this.bgColor;

	};

	this.setPosition = function (x, y){
		this.x = x;
		this.y = y;

		this.element.style.top = this.y+'px'; // y axis
		this.element.style.left = this.x+'px'; // x axis 

	};

	this.moveHorizontally = function (){

		this.x += this.direction * this.velocity;

		this.element.style.left = this.x+'px';
	
	}

	this.moveVertically = function (){
		this.y += this.direction * this.velocity;

		this.element.style.top = this.y+'px';
	};

	this.moveDiagonally = function (){
		this.moveHorizontally();
		this.moveVertically();
	};
}

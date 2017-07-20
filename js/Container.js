function Container(){
	
	this.width = 800;
	this.height = 800;
	this.bgColor = 'red';
	this.margin = '0 auto';
	this.position = 'relative';



	this.create = function (){

		this.element = document.createElement('div');
		
		this.element.style.width = this.width + 'px';
		this.element.style.height = this.height + 'px';
		this.element.style.margin = this.margin;
		this.element.style.background = this.bgColor;
		this.element.style.position = this.position; 
	};

	this.append = function (childElement){
		this.element.appendChild(childElement);
	};
}








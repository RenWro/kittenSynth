// Kitten Synth
// in the space
// by gustavo silveira

var nOfMeows = 13;
var meow = [];
var kittenImg = [];
var isPressed = [];
var kitten = [];
var keys = ['a','w','s','e','d','f','t','g','y','h','u','j','k'];
var offset = 150;
var offset2 = 100;
var k = 'a';
//var keyCodes = [97, 115, 100, 102, 103, 104, 106, 107, 108];
var keyCodes = [65, 83, 68, 70, 71, 72, 74, 75];
//var meow;
var bg;

function preload() {   


}

function setup(){
	//  createCanvas(windowWidth,windowHeight);
	bg = loadImage('bg.jpeg');
	
	createCanvas(1400,720);
	background(bg);
	//	angleMode(DEGREES);
	imageMode(CENTER);
	

	for (let i = 0; i<nOfMeows; i++) {		
		kittenImg[i] = 'kitten' + i + '.png';
		meow[i] = 'meow' + i + '.mp3';
		//		print(kittenImg[i]);
		//		print(meow[i]);
	} 

	for (let i=0; i < nOfMeows; i++) {
		kitten[i] = new Button(kittenImg[i], meow[i], 1, i*offset+offset2, offset+offset/2, true); //(_imgFile, _soundFile, _scale = 1, _x, _y, _keyPressed)
	}



}


function draw(){
	push();
	scale(2);
	background(bg);
	pop();

	for (let i=0; i<nOfMeows; i++) {
		kitten[i].displayImg(isPressed[i]);
	}
	checkKey();

}


function keyTyped() {
	
	for (let i=0; i<nOfMeows; i++) {
		if(key === keys[i]) {
			kitten[i].playSound();
			//print(key);
		}
	}


}

function checkKey() {

	for(let i=0; i<9; i++) {
		if(keyIsDown(keyCodes[i])) {
			isPressed[i] = false;
			//print(keyCodes[i]);
		} else {
			isPressed[i] = true;
		}
	}

}

function keyIsPressed() {

}

class Button{

	constructor(_imgName, _soundName, _scale = 1, _x, _y, _keyPressed) {		
		this.x = _x;
		this.y = _y;
		this.scale = _scale;
		this.keyPressed = _keyPressed;
		this.rotation = int(random(360));

		this.img = loadImage(_imgName);
		this.sound = loadSound(_soundName);
		this.sound.setVolume(0.5);

		push();
		translate(this.x, this.y);
		image(this.img, 0, 0);
		pop();
	}

	displayImg(_keyPressed = true){

		this.keyPressed = _keyPressed;
		if(this.keyPressed === true) {
			push();
			translate(this.x, this.y);
			image(this.img, 0, 0);
			pop(); 
		} else {
			push();
			translate(this.x, this.y);
			rotate(this.rotation);
			image(this.img, 0, 0);
			pop(); 
		}
	}

	playSound() {
		this.sound.play();
		print('sound');
	}


}

var c1 = "rgb(251,174,23)";
var c2 = "rgb(241,90,36)";
var c3 = "rgb(190,141,48)";
var c4 = "white";


var osc1;
var osc2;
var osc3;
var osc4;
var osc5;
var osc6;
var osc7;
var osc8;
var osc9;
var osc10;
var osc11;
var osc12;
var osc13;
var osc14;
var osc15;
var osc16;



function setup(){
	createCanvas(680,1146);
	background(c1);
	noStroke();


	fill(c2);
	textSize(24)
	text('volume \nreverb rate \nreverb time',40,125);

	osc1 = new p5.Oscillator();
	osc1.setType('sine');
	osc1.freq(261.6);
	osc1.amp(0);
	osc1.start();

	osc2 = new p5.Oscillator();
	osc2.setType('sine');
	osc2.freq(293.67);
	osc2.amp(0);
	osc2.start();

	osc3 = new p5.Oscillator();
	osc3.setType('sine');
	osc3.freq(329.63);
	osc3.amp(0);
	osc3.start();

	osc4 = new p5.Oscillator();
	osc4.setType('sine');
	osc4.freq(349.23);
	osc4.amp(0);
	osc4.start();

	osc5 = new p5.Oscillator();
	osc5.setType('sine');
	osc5.freq(392);
	osc5.amp(0);
	osc5.start();

	osc6 = new p5.Oscillator();
	osc6.setType('sine');
	osc6.freq(440);
	osc6.amp(0);
	osc6.start();

	osc7 = new p5.Oscillator();
	osc7.setType('sine');
	osc7.freq(493.88);
	osc7.amp(0);
	osc7.start();

	osc8 = new p5.SinOsc();
	osc8.amp(0);
	osc8.start();
///////////////////////////////
	osc9 = new p5.SinOsc();
	osc9.amp(0);
	osc9.start();

	osc10 = new p5.SinOsc();
	osc10.amp(0);
	osc10.start();

	osc11 = new p5.SinOsc();
	osc11.amp(0);
	osc11.start();

	osc12 = new p5.SinOsc();
	osc12.amp(0);
	osc12.start();

	osc13 = new p5.SinOsc();
	osc13.amp(0);
	osc13.start();

	osc14 = new p5.SinOsc();
	osc14.amp(0);
	osc14.start();

	osc15 = new p5.SinOsc();
	osc15.amp(0);
	osc15.start();

	osc16 = new p5.SinOsc();
	osc16.amp(0);
	osc16.start();


	// volume1Slide = createSlider(0,99,50);
	// volume1Slide.position(125,108);
	// volume1Slide.style('width','80px');
	//
	delay1Slide = createSlider(0,99,0);
	delay1Slide.position(125,128);
	delay1Slide.style('width','80px');

	delay1Slide2 = createSlider(0,99,0);
	delay1Slide2.position(125,148);
	delay1Slide2.style('width','80px');

	del1 = new p5.Delay();

	// volume2Slide = createSlider(0,99,50);
	// volume2Slide.position(125,308);
	// volume2Slide.style('width','80px');





	banner();
	waveForm();

}

function draw(){
increment1(40,260);

// var vol1 = volume1Slide.value();
// channel1.setVolume(vol1*.01);
noStroke();
fill(c2);
//First Row
if (mouseX > 100 && mouseX < 200 && mouseY < 330 && mouseY > 230) {
	fill(c3);
	if (mouseIsPressed) {
		fill(c4);
			// ramp amplitude to 0.5 over 0.1 seconds
			osc5.amp(0.5, 0.01);
		} else {
			// ramp amplitude to 0 over 0.5 seconds
			osc5.amp(0, 0.01);
		}
}
rect(100,230,100,100);

fill(c2);
if (mouseX > 220 && mouseX < 320 && mouseY < 330 && mouseY > 230) {
	fill(c3);
	if (mouseIsPressed) {
			fill(c4);
			// ramp amplitude to 0.5 over 0.1 seconds
      osc6.amp(0.5, 0.01);
    } else {
      // ramp amplitude to 0 over 0.5 seconds
      osc6.amp(0, 0.01);
    }
}
rect(220,230,100,100);

fill(c2);
if (mouseX > 340 && mouseX < 440 && mouseY < 330 && mouseY > 230) {
	fill(c3);
	if (mouseIsPressed) {
		fill(c4);
      // ramp amplitude to 0.5 over 0.1 seconds
      osc7.amp(0.5, 0.01);
    } else {
      // ramp amplitude to 0 over 0.5 seconds
      osc7.amp(0, 0.01);
    }
}
rect(340,230,100,100);

fill(c2);
if (mouseX > 460 && mouseX < 580 && mouseY < 330 && mouseY > 230) {
	fill(c3);
	if (mouseIsPressed) {
		fill(c4);
      // ramp amplitude to 0.5 over 0.1 seconds
      osc8.amp(0.5, 0.01);
    } else {
      // ramp amplitude to 0 over 0.5 seconds
      osc8.amp(0, 0.01);
    }
}
rect(460,230,100,100);

///////
fill(c2);
if (mouseX > 100 && mouseX < 200 && mouseY < 450 && mouseY > 350) {
	fill (c3);
	if (mouseIsPressed) {
		fill(c4);
			// ramp amplitude to 0.5 over 0.1 seconds
			osc1.amp(0.5, 0.01);
		} else {
			// ramp amplitude to 0 over 0.5 seconds
			osc1.amp(0, 0.01);
		}
}
rect(100,350,100,100);

fill(c2);
if (mouseX > 220 && mouseX < 320 && mouseY < 450 && mouseY > 350) {
	fill(c3);
	if (mouseIsPressed) {
		fill(c4);
      // ramp amplitude to 0.5 over 0.1 seconds
      osc2.amp(0.5, 0.01);
    } else {
      // ramp amplitude to 0 over 0.5 seconds
      osc2.amp(0, 0.01);
    }
}
rect(220,350,100,100);

fill(c2);
if (mouseX > 340 && mouseX < 440 && mouseY < 450 && mouseY > 350) {
	fill(c3);
	if (mouseIsPressed) {
		fill(c4);
      // ramp amplitude to 0.5 over 0.1 seconds
      osc3.amp(0.5, 0.01);
    } else {
      // ramp amplitude to 0 over 0.5 seconds
      osc3.amp(0, 0.01);
    }
}
rect(340,350,100,100);

fill(c2);
if (mouseX > 460 && mouseX < 580 && mouseY < 450 && mouseY > 350) {
	fill(c3);
	if (mouseIsPressed) {
		fill(c4);
      // ramp amplitude to 0.5 over 0.1 seconds
      osc4.amp(0.5, 0.01);
    } else {
      // ramp amplitude to 0 over 0.5 seconds
      osc4.amp(0, 0.01);
    }
}
rect(460,350,100,100);

fill(c2);
if (mouseX > 100 && mouseX < 200 && mouseY < 570 && mouseY > 470) {
	fill (c3);
	if (mouseIsPressed) {
		fill(c4);
			// ramp amplitude to 0.5 over 0.1 seconds
			osc1.amp(0.5, 0.01);
		} else {
			// ramp amplitude to 0 over 0.5 seconds
			osc1.amp(0, 0.01);
		}
}
rect(100,470,100,100);
fill(c2);

rect(220,470,100,100);
fill(c2);

rect(340,470,100,100);
fill(c2);

rect(460,470,100,100);
fill(c2);

//
// rect(100,590,100,100);
// fill(c2);
//
// rect(220,590,100,100);
// fill(c2);
//
// rect(340,590,100,100);
// fill(c2);
//
// rect(460,590,100,100);
// fill(c2);



osc1.freq(261.6);
osc2.freq(293.67);
osc3.freq(329.63);
osc4.freq(349.23);
osc5.freq(392);
osc6.freq(440);
osc7.freq(493.88);
osc8.freq(523.25);


rev1Rate = delay1Slide.value()*.01;
rev1Time = delay1Slide2.value()*.01;
del1.process(osc1, rev1Time, rev1Rate, 2000);
del1.process(osc2, rev1Time, rev1Rate, 2000);
del1.process(osc3, rev1Time, rev1Rate, 2000);
del1.process(osc4, rev1Time, rev1Rate, 2000);
del1.process(osc5, rev1Time, rev1Rate, 2000);
del1.process(osc6, rev1Time, rev1Rate, 2000);
del1.process(osc7, rev1Time, rev1Rate, 2000);
del1.process(osc8, rev1Time, rev1Rate, 2000);


}



function banner(){
	noStroke();
	fill(c2);
	rect(0,0,width,100);
	fill(c1);
	textSize(40);
	textAlign(LEFT);
	text("hold music ", 100,70);
}

function waveForm(){
	noStroke();
	fill("white");
	rect(40,200,560,50);
}

function increment1(x,y){
	strokeWeight(1);
	stroke(c2);
		for(var i = 0; i<5; i = i+1){
			line(x+(i*140),y,x+(i*140),y+20);
			}
		for(var i = 0; i<40; i = i+1){
			line(x+(i*14),y,x+(i*14),y+12);
			}
		for(var i = 0; i<80; i = i+1){
			line(x+(i*7),y,x+(i*7),y+8);
			}
}

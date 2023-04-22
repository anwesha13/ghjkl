
var canavs = new fabric.Canavs('myCanvas');

ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.image.formURL("golf-h1.png", function(img){
		hole_obj = Img;
		hole_obj.ScaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		})
		canvas.add(hole_obj);
	})
	new_image();
}

function new_image()
{
	fabric.Image.formURL("ball.png", function(img){
		ball_obj = img;
		ball_obj.ScaleToWidth(50);
		ball_obj.scale.scaleToHeight(50);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canavs.remove(ball_obj);
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (ball_y <=450)
		{
			ball_y = ball_y + block_image_height;
			console.log("block image height = " + block_image_height)
			console.log("when down arrow key is pressed, X = " + ball_x + ", Y = " +ball_y);
		}
	} 

	function down()
	{
		if (ball_y <=50)
		{
			ball_y = ball_y + block_image_height;
			console.log("block image height = " + block_image_height)
			console.log("when up arrow key is pressed, X = " + ball_x + ", Y = " +ball_y);
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_y = ball_y + block_image_height;
			console.log("block image height = " + block_image_height)
			console.log("when left arrow key is pressed, X = " + ball_x + ", Y = " +ball_y);
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_y = ball_y + block_image_height;
			console.log("block image height = " + block_image_height)
			console.log("when right arrow key is pressed, X = " + ball_x + ", Y = " +ball_y);
		}
	}
	
}


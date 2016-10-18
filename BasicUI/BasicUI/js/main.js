
window.onload = function () {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName === "back") {
			try {
			    tizen.application.getCurrentApplication().exit();
			} catch (ignore) {
			}
		}
	});

    // Sample code
    var textbox = document.querySelector('.contents');
    var counter = 0;
    textbox.addEventListener("click", function(){
    	var box = document.querySelector('#textbox');
    	// Counter
    	if (counter < 15) {
    		counter = counter + 1; 
    	}
    	else
    		counter = 0;
    	// Setting Background color
    	if (counter === 0) {
    		document.body.style.background = 'rgb(0, 0, 0)';
    	}
    	if (counter === 1) {
    		document.body.style.background = 'rgb(50, 0, 0)';
    	}
    	if (counter === 2) {
    		document.body.style.background = 'rgb(100, 0, 0)';
    	}
    	if (counter === 3) {
    		document.body.style.background = 'rgb(150, 0, 0)';
    	}
    	if (counter === 4) {
    		document.body.style.background = 'rgb(200, 0, 0)';
    	}
    	if (counter === 5) {
    		document.body.style.background = 'rgb(255, 0, 0)';
    	}
    	if (counter === 6) {
    		document.body.style.background = 'rgb(0, 50, 0)';
    	}
    	if (counter === 7) {
    		document.body.style.background = 'rgb(0, 100, 0)';
    	}
    	if (counter === 8) {
    		document.body.style.background = 'rgb(0, 150, 0)';
    	}
    	if (counter === 9) {
    		document.body.style.background = 'rgb(0, 200, 0)';
    	}
    	if (counter === 10) {
    		document.body.style.background = 'rgb(0, 255, 0)';
    	}
    	if (counter === 11) {
    		document.body.style.background = 'rgb(0, 0, 50)';
    	}
    	if (counter === 12) {
    		document.body.style.background = 'rgb(0, 0, 100)';
    	}
    	if (counter === 13) {
    		document.body.style.background = 'rgb(0, 0, 150)';
    	}
    	if (counter === 14) {
    		document.body.style.background = 'rgb(0, 0, 200)';
    	}
    	if (counter === 15) {
    		document.body.style.background = 'rgb(0, 0, 255)';
    	}
    	//box.innerHTML = (box.innerHTML === "Black") ? "Red" : "Black";
    	box.innerHTML = document.body.style.background;
    	console.log(counter);
    	console.log(document.body.style.background);
    });
    
};

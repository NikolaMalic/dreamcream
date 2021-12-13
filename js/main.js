var i = 0;
function reveal() {
	if(!i){
		dots.style.display = "none";
		btn.innerHTML = "Read Less";
		readmore.style.display = "inline";
		i = 1;
	}
	else{
		dots.style.display = "inline";
		btn.innerHTML = "Read More";
		readmore.style.display = "none";
		i = 0;
	}
}

function disappear() {
	var ovr = document.getElementsByClassName("overlay-text")[0];
	ovr.style.display = "none";	
}

var o = 0;
function extracream() {
	if(!o){
		newhidden.style.display = "inline";
		btn1.innerHTML = "Less Flavours";
		o = 1;
	}
	else{
		newhidden.style.display = "none";
		btn1.innerHTML = "More Flavours";
		o = 0;
	}
}

const icecream = [
{
	id: 1,
	title: "Avocado Banana",
	price: 180,
	img: "img/icecream1.jpg",
},
{
	id: 2,
	title: "Coconut Lime",
	price: 200,
	img: "img/icecream2.jpg",
},
{
	id: 3,
	title: "Chocolate-Flake Raspberry",
	price: 150,
	img: "img/icecream3.jpg",
},
{
	id: 4,
	title: "Strawberry Sorbet",
	price: 200,
	img: "img/icecream4.jpg",
},
{
	id: 5,
	title: "Colombia Chocolate",
	price: 150,
	img: "img/icecream5.jpg",
},
{
	id: 6,
	title: "Oreo and Cream",
	price: 180,
	img: "img/icecream6.jpg",
},

];

const row = document.getElementsByClassName("row")[6];

icecream.forEach((icecream, id) => {
	const card = `
	<div class="col-md-4 col-sm-6">
		<div class="portfolio-part">
		<img src = "${icecream.img}" alt = "icecream">
			<div class="overlay-slide">
				<h2>${icecream.title}</h2>
				<p>Price per scoop: ${icecream.price} RSD</p>
			</div>
		</div>
	</div>
`;
	row != null ? row.innerHTML += card : null
});

function validation(){

    var name1 = document.getElementById('name').value;
    var last1 = document.getElementById('last').value;
    var email1 = document.getElementById('email').value;
    var message1 = document.getElementById('message').value;

    let nameCheck = /^[A-Za-z. ]{5,20}$/;
    let lastCheck = /^[A-Za-z. ]{5,20}$/;
    let emailCheck = /^[a-z0-9.]{2,}@[a-z]{2,}[.]{1}[a-z.]{2,6}$/;

    if(nameCheck.test(name1)){
        document.getElementById('name-error').innerHTML = " ";
    }
    else{
        document.getElementById('name-error').innerHTML = "Incorrect first name input!";
        return false;
    }
    
	if(lastCheck.test(last1)){
        document.getElementById('last-error').innerHTML = " ";
    }
    else{
        document.getElementById('last-error').innerHTML = "Incorrect last name input!";
        return false;
    }
	
    if(emailCheck.test(email1)){
        document.getElementById('email-error').innerHTML = " ";
    }
    else{
        document.getElementById('email-error').innerHTML = "Incorrect email input!";
        return false;
    }

    document.getElementById('confirm').innerHTML = "Your message has been successfully sent!";
}


function SetDate()
{
var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = year + "-" + month + "-" + day;

document.getElementById("date").value = today;
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

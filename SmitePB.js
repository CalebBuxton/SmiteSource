var teams = ["Order", "Chaos"];
var counter;
var draftOrder = [
["BANNING", "BAN", 0, 1 ],
["BANNING", "BAN", 1, 1 ],
["BANNING", "BAN", 0, 2 ],
["BANNING", "BAN", 1, 2 ],
["PICKING", "PICK", 0, 1 ],
["PICKING", "PICK", 1, 1 ],
["PICKING", "PICK", 1, 2 ],
["PICKING", "PICK", 0, 2 ],
["PICKING", "PICK", 0, 3 ],
["PICKING", "PICK", 1, 3 ],
["BANNING", "BAN", 1, 3 ],
["BANNING", "BAN", 0, 3 ],
["BANNING", "BAN", 1, 4 ],
["BANNING", "BAN", 0, 4 ],
["PICKING", "PICK", 1, 4 ],
["PICKING", "PICK", 0, 4 ],
["PICKING", "PICK", 0, 5 ],
["PICKING", "PICK", 1, 5 ]
];
var lockInButton = document.getElementById("lockIn");
var orderPicks = [];
var orderBans = [];
var chaosPicks = [];
var chaosBans = [];


function updateDisplay() {
	var status = document.getElementById("status");
	if (counter === draftOrder.length) {
		status.textContent = "Draft Complete";
	}
	else {
	status.textContent = teams[draftOrder[counter][2]] + " " + draftOrder[counter][0];
	}
}

function pushData(name) {
	if (draftOrder[counter][1] === "BAN") {
		if (draftOrder[counter][2] === 0) {
			orderBans.push(name);
		}
		else {
			chaosBans.push(name);
		}
	}
	else {
		if (draftOrder[counter][2] === 0) {
			orderPicks.push(name);
		}
		else {
			chaosPicks.push(name);
		}
	}
};

function init() {
	counter = 0;
	var cats = document.getElementsByClassName("cat");
	for(i = 0; i < cats.length; i++) {
		cats[i].classList.remove("selected");
		cats[i].addEventListener("click", function(){
			for(var i = 0; i < cats.length; i++){
				cats[i].classList.remove("hovered");
			}
			var id = this.getAttribute("id");
			this.classList.add("hovered");
		})
	}
	var lockedImg = document.getElementsByClassName("lockedImg");
	for(var i = 0; i < lockedImg.length; i++) {
		lockedImg[i].setAttribute("src", "http://rosupport.com/demo2/assets/images/gotm.jpg")
	}
	lockInButton.addEventListener("click", function(){
		lockIn();
	})
	var newGame = document.getElementById("reset");
	newGame.addEventListener("click", function(){
		init();
	})
	updateDisplay();
}






function lockIn() {
	var pic = document.querySelector(".hovered")
	var lockedImg = document.getElementsByClassName("lockedImg");
	lockedImg[counter].setAttribute("src",pic.getAttribute("src"));
	pic.classList.remove("hovered");
	pic.classList.add("selected");
	pushData(pic.getAttribute("name"));
	counter++;
	updateDisplay();
}

init ();

http://api.smitegame.com/smiteapi.svc/getGods/1943/C3837D996DF94134BE5EB23B3D5D42E9

http://api.smitegame.com/smiteapi.svc/createsession/1943/C3837D996DF94134BE5EB23B3D5D42E9/20170501164200
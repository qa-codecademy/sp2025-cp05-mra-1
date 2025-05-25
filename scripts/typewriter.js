const words = [
	"Reliable",
	"Efficient",
	"Smart",
	"Eco-Friendly",
	"Affordable",
	"Tailored",
];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	let loopTyping = function () {
		if (word.length > 0) {
			document.getElementById("typewriter").innerHTML += word.shift();
		} else {
			setTimeout(deletingEffect, 1000);
			return;
		}
		timer = setTimeout(loopTyping, 120);
	};
	loopTyping();
}

function deletingEffect() {
	let word = document.getElementById("typewriter").innerHTML;
	let loopDeleting = function () {
		if (word.length > 0) {
			word = word.slice(0, -1);
			document.getElementById("typewriter").innerHTML = word;
		} else {
			i = (i + 1) % words.length;
			typingEffect();
			return;
		}
		timer = setTimeout(loopDeleting, 80);
	};
	loopDeleting();
}

typingEffect();

let button = document.querySelector('#joke-btn');

let loadJoke = () => {
	let joke = new XMLHttpRequest();
	joke.onreadystatechange = function () {
		if (joke.readyState === 4 && joke.status === 200) {
			let data = JSON.parse(joke.responseText);
			attachImg('https://imgflip.com/s/meme/Chuck-Norris-Guns.jpg');
			document.querySelector('#joke').innerHTML = data.value;
		}
	};
	joke.open('GET', 'https://api.chucknorris.io/jokes/random', true);
	joke.send(null);
};

let attachImg = (imgSrc) => {
	let img = document.createElement('img');
	img.width = '130';
	img.height = '130';
	img.src = imgSrc;
	document.querySelector('.container').append(img);
};

button.addEventListener('click', loadJoke);
document.onload = loadJoke();

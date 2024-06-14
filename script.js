let button = document.querySelector('#joke-btn');

let loadJoke = () => {
	let joke = new XMLHttpRequest();
	joke.onreadystatechange = function () {
		if (joke.readyState === 4 && joke.status === 200) {
			let data = JSON.parse(joke.responseText);
			attachImg('https://imgflip.com/s/meme/Chuck-Norris-Guns.jpg');
			document.querySelector('#joke').innerHTML = data.value;
		} else {
			document.querySelector('#joke').innerHTML = 'Something went wrong!';
		}
	};
	joke.open('GET', 'https://api.chucknorris.io/jokes/random', true);
	joke.send();
};

let attachImg = (imgSrc) => {
	let img = document.createElement('img');
	img.width = '100';
	img.height = '100';
	img.src = imgSrc;
	document.querySelector('.container').append(img);
};

button.addEventListener('click', loadJoke);
document.onload(loadJoke());

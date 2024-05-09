let loadJoke = () => {
	let joke = new XMLHttpRequest();
	joke.responseType = 'text';
	joke.onreadystatechange = function () {
		if (joke.readyState === 4 && joke.status === 200) {
			let data = JSON.parse(joke.responseText);
			document.querySelector('#joke').innerHTML = data.value;
		}
	};
	joke.open('GET', 'https://api.chucknorris.io/jokes/random', true);
	joke.send(null);
};

let button = document.querySelector('#joke-btn');
button.addEventListener('click', loadJoke);

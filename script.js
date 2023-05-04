const searchBar = document.querySelector('#search-bar');
const imageButtons = document.querySelectorAll('.image-button');

searchBar.addEventListener('keyup', () => {
	const searchQuery = searchBar.value.toLowerCase();

	imageButtons.forEach((button) => {
		const imageAlt = button.querySelector('img').alt.toLowerCase();
		if (imageAlt.includes(searchQuery)) {
			button.style.display = 'inline-block';
		} else {
			button.style.display = 'none';
		}
	});
});

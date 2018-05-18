const closeSearch = document.querySelector('.closeSearch');
const openSearch = document.querySelector('.openSearch');


openSearch.addEventListener('submit', e=>{
	e.preventDefault();
	// get value of input
	const search = openSearch.querySelector('input[name="openSearch"]').value;
	searchGet('/openSearch', { search });
});

closeSearch.addEventListener('submit', e=>{
	e.preventDefault();
	// get value of input where name={valueName}
	const first_name = closeSearch.querySelector('input[name="first_name"]').value,
	last_name = closeSearch.querySelector('input[name="last_name"]').value,
	civility = closeSearch.querySelector('input[name="civility"]').value,
	age = closeSearch.querySelector('input[name="age"]').value;
	// inpRandInit()
	searchGet('/closeSearch', { first_name, last_name, civility, age });
});

function searchGet (url, data) {


	window.location.url = '/coucou'

	// var r = new XMLHttpRequest();
	// r.open("GET", url, true);
	// r.onreadystatechange = function () {
	// 	if (r.readyState != 4 || r.status != 200) return;
	// 	window.document.innerHTML = r.responseText;
	// };
	// r.send();

	// // create request
	// return window.fetch(path, {
	// 	//passing the path for the request
	// 	method: 'GET',
	// 	headers: {
	// 		'Accept': 'application/json',
	// 		'Content-Type': 'application/json'
	// 	},
	// 	// passing name and owner_id to req.body
	// 	query: 
	// })
}


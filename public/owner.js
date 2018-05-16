const createOwner = document.querySelector('.createOwner');

createOwner.addEventListener('submit', e=>{
	e.preventDefault();
	// get value of input where name=name
	const first_name = createOwner.querySelector('input[name="first_name"]').value,
	// get value of input where name=owner_id
	last_name = createOwner.querySelector('input[name="last_name"]').value,
	civility = createOwner.querySelector('input[name="civility"]').value,
	age = createOwner.querySelector('input[name="age"]').value;
	// inpRandInit()
	post('/createOwner', { first_name, last_name, civility, age });
});

function post (path, data) {
	// create request
	return window.fetch(path, {
		//passing the path for the request
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		// passing name and owner_id to req.body
		body: JSON.stringify(data)
	})
}

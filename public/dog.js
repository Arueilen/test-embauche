const CreateOwner = document.querySelector('.createOwner');

CreateOwner.addEventListener('submit', e=>{
	e.preventDefault();
	// get value of input where name=name
	const last_name = CreateOwner.querySelector('input[name="last_name"]').value,
	const first_name = CreateOwner.querySelector('input[name="first_name"]').value,
	const civility = CreateOwner.querySelector('input[name="civility"]').value,
	// get value of input where name=owner_id
	age = CreateOwner.querySelector('input[name="age"]').value;
	post('/createOwner', { last_name, first_name, civility, age });
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

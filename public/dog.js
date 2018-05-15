const CreateDog = document.querySelector('.createDog');

CreateDog.addEventListener('submit', e=>{
	e.preventDefault();
	// get value of input where name=name
	const name = CreateDog.querySelector('input[name="name"]').value,
	// get value of input where name=owner_id
	owner_id = CreateDog.querySelector('input[name="owner_id"]').value;
	post('/createDog', { name, owner_id });
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

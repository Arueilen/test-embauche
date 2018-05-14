const CreateDog = document.querySelector('.createDog');

CreateDog.addEventListener('submit', e=>{
	e.preventDefault();
	const name = CreateDog.querySelector('input[name="name"]').value,
	owner_id = CreateDog.querySelector('input[name="owner_id"]').value;
	post('/createDog', { name, owner_id });
});

function post (path, data) {
	return window.fetch(path, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
}
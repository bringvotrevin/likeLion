async function message() {
	let hello = await new Promise((resolve) => {
			setTimeout(() => {
					resolve('hello');
			}, 100)
	})

	let world = await new Promise((resolve) => {
			setTimeout(() => {
					resolve('world');
			}, 100)
	})

	console.log(`${hello} ${world}`);
}

function withoutAwait() {
	new Promise((resolve) => {
		setTimeout(() => {
			resolve('hello');
	}, 100);
	}).then((result) => {
		new Promise((resolve) => {
			setTimeout(() => {
				resolve(result + 'world');
		}, 100);
		}).then((result) => {
			console.log(result);
		})
	})
}

message();
withoutAwait();
const BASE_URL = 'http://localhost:8080/';

export const fetchDog = () => dispatch => {
	dispatch(fetchDogRequest());
	return fetch(`${BASE_URL}/api/dog`)
		.then(res => res.json())
		.then(cat => dispatch(fetchDogSuccess(cat)))
		.catch(err => dispatch(fetchRequestError(err)));
}

export const adoptDog = (dog) => dispatch => {
	dispatch(adoptedDog(dog));
	return fetch(`${BASE_URL}/api/dog`, {
		method: 'DELETE',
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then(() => (dispatch(fetchDog())))
}

export const ADOPTED_DOG = 'ADOPTED_DOG';
export const adoptedDog = dog => ({
	type: ADOPTED_DOG,
	dog
});

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
	type: FETCH_DOG_REQUEST
});

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = cat => ({
	type: FETCH_DOG_SUCCESS,
	cat
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = err => ({
	type: FETCH_DOG_ERROR,
	err
});
import {ref, set, database, auth,createUserWithEmailAndPassword} from './firebase';




const handleFormSubmission = (e) => {
    e.preventDefault();

    const username = document.querySelector('#signupUsername').value;
    const email = document.querySelector('#signupEmail').value;
    const password = document.querySelector('#signupPassword').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            set(ref(database, 'users/' + user.uid), {
                username: username,
                email: email,
                password: password,
                role: 'simple user'
            })
                .then(() => {
                    alert('User created and data saved to database!');
                })
                .catch((databaseError) => {
                    console.error('Error saving user data:', databaseError);
                    alert('User created but failed to save user data.');
                });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error creating user:', errorCode, errorMessage);
            alert(errorMessage);
        });
}
export default {handleFormSubmission}
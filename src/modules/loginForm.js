const form = () => {
    return `
    <div class="container text-center w-50 p-3">
        <h3>Register</h3>
        <form id="signupForm">
            <div class="form-group mb-2">
                <input type="text" id="signupUsername" class="form-control" placeholder="Username" required>
            </div>
            <div class="form-group mb-2">
                <input type="email" id="signupEmail" class="form-control" placeholder="Email" required>
            </div>
            <div class="form-group mb-2">
                <input type="password" id="signupPassword" class="form-control" placeholder="Password" required>
            </div>
            <div class="form-group mb-2">
                <button type="submit" class="btn btn-primary mb-2">Sign Up</button>
            </div>
        </form>
    </div>`;
}

export default form;





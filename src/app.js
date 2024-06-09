import renderForm from "./modules/renderForm";
import  handleFormSubmission  from "./modules/register";

document.addEventListener('DOMContentLoaded', () => {
    renderForm();
    document.querySelector('#signupForm').addEventListener('submit', handleFormSubmission);
});

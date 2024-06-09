import form from "./loginForm";

const renderForm = () => {
    const formElement = document.createElement('div');
    formElement.innerHTML = form();
    document.querySelector('#app').appendChild(formElement);
}

export default renderForm;

import '../css/common.css';
import '../css/03-feedback.css';
import { throttle } from 'lodash';

const STORAGE_KEY = 'feedback-form-state';

let feedbackFromState = {
   email: '',
   message: '',
};

const onInput = function ({ target }) {
    const { name, value } = target
    feedbackFromState[name] = value
    const stringifyData = JSON.stringify(feedbackFromState);
    localStorage.setItem(STORAGE_KEY, stringifyData);
};

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('input'),
};

function init() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    feedbackFromState = data ?? feedbackFromState;
    
    refs.input.value = data?.email || '';
    refs.textarea.value = data?.message || '';
}

refs.form.addEventListener('input', throttle(onInput, 500));

init();
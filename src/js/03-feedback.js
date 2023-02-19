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

init ();

const onSubmit = e => {
    e.preventDefault();

    const {
        elements: { email, message },
    } = e.currentTarget;

    if (message.value !== '' && email.value !== '') {
        feedbackFromState.email = email.value;
        feedbackFromState.message = message.value;

        console.log(feedbackFromState);
        e.currentTarget.reset();
        localStorage.removeItem('feedback-form-state');
        feedbackFromState = {
            email: '',
            message: '',
        };
    } else {
        alert('Please fill in all fields!');
    }
};

// refs.form.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', onSubmit);


// init();
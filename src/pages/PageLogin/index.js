import {
    template
} from './login.tmpl'

export function login() {
    const root = document.getElementById('app')
    root.innerHTML = template
}
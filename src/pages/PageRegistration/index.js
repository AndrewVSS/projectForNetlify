import {
    template
} from './registration.tmpl'

export function registration() {
    const root = document.getElementById('app')
    root.innerHTML = template
}
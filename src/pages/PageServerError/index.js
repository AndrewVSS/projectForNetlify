import {
    template
} from './serverError.tmpl'

export function serverError() {
    const root = document.getElementById('app')
    root.innerHTML = template
}
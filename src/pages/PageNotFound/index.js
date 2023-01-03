import {
    template
} from './notFound.tmpl'

export function notFound() {
    const root = document.getElementById('app')
    root.innerHTML = template
}
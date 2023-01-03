import {
    template
} from './settings.tmpl'

export function settings() {
    const root = document.getElementById('app')
    root.innerHTML = template
}
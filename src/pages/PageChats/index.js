import {
    template
} from './chats.tmpl'

export function chats() {
    const root = document.getElementById('app')
    root.innerHTML = template
}
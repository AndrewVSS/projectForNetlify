import {
    login
} from './pages/PageLogin/index';

import {
    notFound
} from './pages/PageNotFound/index';

import {
    registration
} from './pages/PageRegistration/index';

import {
    serverError
} from './pages/PageServerError/index';

import {
    settings
} from './pages/PageSettings/index';

import {
    chats
} from './pages/PageChats/index';


// Application div
const appDiv = "app";
// Both set of different routes and template generation functions
let routes = {};
let templates = {};
// Register a template (this is to mimic a template engine)
let template = (name, templateFunction) => {
    return templates[name] = templateFunction;
};

templates.chats = template
// Define the routes. Each route is described with a route path & a template to render
// when entering that path. A template can be a string (file name), or a function that
// will directly create the DOM objects.
let route = (path, template) => {
    if (typeof template == "function") {
        return routes[path] = template;
    } else if (typeof template == "string") {
        return routes[path] = templates[template];
    } else {
        return;
    }
};
// Register the templates.
template('login', () => {
    login()
});
template('notFound', () => {
    notFound()
});
template('chats', () => {
    chats()
});
template('registration', () => {
    registration()
});
template('serverError', () => {
    serverError()
});
template('settings', () => {
    settings()
});

// Define the mappings route->template.
route('/login', 'login');
route('/notFound', 'notFound');
route('/chats', 'chats');
route('/registration', 'registration');
route('/serverError', 'serverError');
route('/settings', 'settings');

// Generate DOM tree from a string
let createDiv = (id, xmlString) => {
    let d = document.createElement('div');
    d.id = id;
    d.innerHTML = xmlString;
    return d.firstChild;
};
// Helper function to create a link.
let createLink = (title, text, href) => {
    let a = document.createElement('a');
    let linkText = document.createTextNode(text);
    a.appendChild(linkText);
    a.title = title;
    a.href = href;
    return a;
};

// Give the correspondent route (template) or fail
let resolveRoute = (route) => {
    try {
        return routes[route];
    } catch (error) {
        throw new Error("The route is not defined");
    }
};
// The actual router, get the current URL and generate the corresponding template
let router = () => {
    const url = window.location.pathname || "/";
    const routeResolved = resolveRoute(url);
    routeResolved();
};
// For first load or when routes are changed in browser url box.
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
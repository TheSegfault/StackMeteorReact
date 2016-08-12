import {
    Template
} from 'meteor/templating';
import {
    ReactiveVar
} from 'meteor/reactive-var';

import {
    Session
} from 'meteor/session'

import './main.html';

Session.setDefault('test', "COUCOU");
//Using Session is for global use
//Using ReactiveVar locally is better

Template.hello.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
    counter() {
        return Template.instance().counter.get();
    },
});

Template.hello.events({
    'click button' (event, instance) {
        // increment the counter when button is clicked
        if (instance.counter.get() === "LOL") {
            instance.counter.set(1);
        }
        console.log("hello.events.click button", instance.counter.get());
        instance.counter.set(instance.counter.get() + 1);
    },
});

Template.tasks.onCreated(function tasksOnCreated() {
    this.counter = new ReactiveVar(0);
    this.test = new ReactiveVar(0);
});

Template.tasks.helpers({
    counter() {
        return Template.instance().counter.get();
    },
    test() {
        return Template.instance().test.get();
    },
});

Template.tasks.events({
    'click button' (event, instance) {
        // increment the counter when button is clicked
        instance.counter.set("LOL");
        console.log("tasks.events.click button", instance.counter.get());
        console.log("tasks.events.click button", instance.test.get());
    },
});

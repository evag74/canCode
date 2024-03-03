### Cancode Front-end.

Coolest coding institution in South Florida, on a mission to share the knowledge of programming with under-privileged kids.


## High-level structure.

Most of the functionality on this website had to be designed so that all files were part of the front end.

HTML pages all have their own CSS file however they also use the index.css file to share some sane standards.

Big pieces of functionality are placed in their own js files and sourced only on the pages that use them.

Components are reusable pieces of html that can be dynamically populated with structured data. All components are js classes and they have an accompaning css file for styling of only said component.


## Components

This is where reusable web components are stored in the form of custom elements. 

read up on it here: https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements


# Json as data files.

Json should be used as the standard format for storing structured information like team members and contributors.

The reccomended approach is to programatically convert such objects into custom elements that can be dynamically inserted into the DOM.

For now keep in mind that these elements have to be attached before populating their entries. (PENDING: This could probably be fixed by implementing shadow DOM or template elements https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)


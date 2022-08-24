# Vue Aos
**A Vue directive to add Animation on scroll to a HTML element.**

## Breaking changes

* use vitejs
* remove component version (useless)
* remove visibility props 
* threshold default value to 0 
* add .once modifiers
* add css variable --isIntersecting (1|0)
* add selector properties for apply IntersectionObserver to children selector (example: v-vue-aos="{selector: 'li'}")


## Table of content

* [Introduction](#introduction)
* [Demo](#demo)
* [Installation](#installation)
* [Usage](#usage)
* [Properties](#properties)
* [Events](#events)
* [Polyfill](#polyfill)

## Introduction

The [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) is an amazing API which allows you to observe one or more HTMLElement for when it has entered or left the viewport.

This API has many use cases like, infinite-scroll, lazy-loading or animations when an element enters the viewport.

When an element enters in the viewport, the animation start.

## Demo

[Demo](https://Se7en-IT.github.io/vue-aos/)

## Installation

Simply install using your favorite package manager 🔥

#### NPM
```bash
npm install vue-aos --save
```

#### Yarn
```bash
yarn add vue-aos
```

```js
import Vue from 'vue'
import VueAos from 'vue-aos'
Vue.use(VueAos)
```

## Usage

#### .vue

```html
<template>
  <main>
    <div v-vue-aos="{animationClass:'fadeIn animated'}">{{ msg }}</div>
    <div v-vue-aos.once="{animationClass:'fadeIn animated'}">{{ msg }}</div>
  </main>
</template>
```


## Properties

| Property   | Type        | Default           | Required | Description                              |
| ---------- | ----------- | ----------------- | -------- | ---------------------------------------- |
| animationClass | String | '' | *no* | CSS animation class
| threshold  | Number       | 0          | *no*     | [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options) |
| root       | HTMLElement | null              | *no*     | [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options) |
| rootMargin | String      | *0px 0px 0px 0px* | *no*     | [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options) |
| selector | String | 'li' | *no* | Apply to query selector
| **animationstart**  | [*IntersectionObserverEntry*](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) | Event fired when animation start |
| **animationend**  | [*IntersectionObserverEntry*](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) | Event fired when animation end |


## Modifiers

| once | boolean | false | *no* | Once time animation.


When HTML element "isIntersecting", the directive set on element a css variable --isIntersect to 1 otherwise to 0.
It is useful when you want to use transition animation. Thanks to (https://twitter.com/jh3yy/status/1558551933064884225?t=JxoTN-eGP-EkmAkDcdreeg&s=08)


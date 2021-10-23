# Vue Aos
**A Vue component to add Animation on scroll to a Vue component or HTML element.**

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
import * as VueAos from 'vue-aos'
Vue.use(VueAos)
```

## Usage

The package acts as an abstract component, much like what you may know from [keep-alive](https://vuejs.org/v2/api/#keep-alive) or [transition](https://vuejs.org/v2/api/#transition).

This means that it's basically a "decorator". A component which does not output any markup to the DOM, but adds the functionality under the hood 😱.

**Add directive version with same props**

#### .vue

```html
<template>
  <vue-aos animation-class="fadeIn animated">
    <div>{{ msg }}</div>
  </vue-aos>
  <div v-vue-aos="{animationClass:'fadeIn animated'}">{{ msg }}</div>
</template>
```



## Properties

| Property   | Type        | Default           | Required | Description                              |
| ---------- | ----------- | ----------------- | -------- | ---------------------------------------- |
| visibility | String | 'hidden' | *no* | Visibility start state
| animationClass | String | '' | *no* | CSS animation class
| threshold  | String       | 0.5          | *no*     | [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options) |
| root       | HTMLElement | null              | *no*     | [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options) |
| rootMargin | String      | *0px 0px 0px 0px* | *no*     | [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options) |



## Events

| Name       | Arguments                                | Description                              |
| ---------- | ---------------------------------------- | ---------------------------------------- |
| **animationstart**  | [*IntersectionObserverEntry*](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) | Event fired when animation start |
| **animationend**  | [*IntersectionObserverEntry*](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) | Event fired when animation end |

## Polyfill

The IntersectionObserver API is not currently available in all browsers ([IE11, Safari and iOS Safari](http://caniuse.com/#feat=intersectionobserver)). If you intend to support these browsers, you'll need to add a poylfill to your bundle.

[WICG IntersectionObserver Polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill) is highly recommended.
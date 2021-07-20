---
title: Spatial System
description: Learn how to create amazing layouts and compositions with Ecos Design System
slug: spatial-guide
section: guides
tags: Guide, Basic Principle
---
# Spatial System

When you build a website or an application, you need

* *Components*: such as buttons, cards, form fields etc.
* *Composition*: which is the way components are arranged on the page in a way that is coherant and functionnal. 

The Spatial System is responible to solve the most common needs for your compositions - whichever it is.

# Spatial properties and composition components

In order to build a nice webpage, you'll want to use a few spatial units and stick to those. This will bring much clarity and coherance on your page.

ECOS provides two main tools to help you solve most of your spatial concerns:

1. CSS spatial properties
2. Composition components

## CSS Spatial properties

When you need to place two buttons next to each other you might want to have a small space between them. However you might want to have more space between to main sections of a page.

ECOS has a set of properties as follow:

* `--base-spacing-unit`, defaults to `8`
* `--spacing-unit`, defaults to `8`
* `--spacing-unit-s`, defaults to `4`
* `--spacing-unit-l`, defaults to `16`
* `--spacing-unit-x`, defaults to `32`
* `--spacing-unit-xxl`, defaults to `64`

You'll notice they are all multiple by two (or divided by two) from the base unit. This ensure a nice spacing scale.

In your project you might want to override those values and its totally fine. The idea is that all our composition components are based on those units so when you change a value, everything will adjust accordingly.

# Responsive spacing

Sometimes you want to *save* some space on small viewports. We provide a minimalistic approach to solve this by providing a set of *responsive* CSS spacing properties named as folllow:

* `--responsive-spacing-unit`
* `--responsive-spacing-unit-s`
* `--responsive-spacing-unit-l`
* `--responsive-spacing-unit-x`
* `--responsive-spacing-unit-xx`

They are basically prefixed version of each of the main spatial units. When the viewport is below the `768px` breakpoint, their values are half the size of their non responsive respective properties. When the viewport is over the `768px` they have the same value than their respective properties.

## Composition components

ECOS provides the following components to help create an effective and coherant layout:

* Section
* Stack
* Collection
* Content
* Card Row
* Text Button
* Two

You can follow the links of those components to get in depth informations about their role and options or you can have a look at the following guides to solve some common layout scenarios:

* A basic page layout
* A basic card layout
* A basic form layout

### Where is the Grid component ?

There is none ! The grid is now strongly provided by CSS itself and has great support over the major browsers. Ecos is not designed to do what CSS can already do. When you need a grid, please create your own composition style with a `display: grid;` and use one of the relevant spacing unit property as your `grid-grap` CSS property.


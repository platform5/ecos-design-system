---
title: Welcome
description: Discover Ecos Design System
slug: welcome-page
---
# A design system you'll enjoy working with

Ecos Design System is built on the amazing work of Microsoft's FAST UI project. You'll soon discover the great benefits of Ecos:

* It's fast.
* It's extensible.
* It uses native web-components.
* It works in most framework out of the box or with minimal config.
* It is well documented (this is a work in progress to be honest right now, but it's going to be great with many exemples and guides)

# What's a design system by the way ?

Based on a set of *Design Tokens*, the design system apply a consistent design and user experience on websites or applications. Exemples:

* you can change the whole *coloring* scheme of Ecos by changing it's `fillColor` *Design Token*.
* you can adjust the *rounding* of all controls by changing its `controlCornerRadius` *Design Token*.

With Ecos, you can do this at runtime by changing each Design Token's value from a Javascript code and everything related to this value will change on the whole website or application.

# What's the difference between FAST and ECOS ?

ECOS is strongly based on FAST. In fact, what Microsoft is building with their FAST project is amazing and fun to work with. They have built

* a strong foundation of web-components that can easily be customized and extended
* a solid *Design Token* mechanism for managing a whole Design System in a cohesive and extensible way
* amazing color methods in order to do color calculations and thus, creating a nice, coherant coloring scheme withouth the need to choose all colors. This includes contrast calculations to ensure a perfect level of accessibility

However, FAST is designed to be a foundation and has a strong focus on low level components. Ecos is building on top of this to bring a few more useful layers:

* new web-components aimed at solving common layout and composition needs, such as `Section`, `Collection`, `Table`, `Stach` components (and more)
* new CSS properties setting a nice Spatial System in place. With those properties you can ensure a coherant use of *space* in your layout
* new colors. FAST is very minimalistic in its set of colors in order to stay focus on the low level components. ECOS aims at provided a more complete set of tools and components to help you build a complete UI/UX. Therefore you'll find more colors and some tweaks to help you bring more creativity in your end-result look and feel.
* new low-level components that we found are missing in the FAST project. An exemple is the *Date Field* component.

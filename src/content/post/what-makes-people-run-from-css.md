---
publishDate: 2023-08-12T00:00:00Z
# author: Youssef Jounaid
title: What makes people run from CSS
excerpt: Start your web journey with AstroWind – harness Astro and Tailwind CSS for a stunning site. Explore our guide now.
image: https://lh3.googleusercontent.com/d/13VAz_tCr0NtHDUW66OCqRnqk-OlrZrVR
# category: Tutorials
tags:
  - astro
  - tailwind css
metadata:
  canonical: https://astrowind.vercel.app/get-started-website-with-astro-tailwind-css
---

# What makes people run from CSS(100%)

Since University days, and even in corporate, a lot of comrades and colleges showed their struggle to use CSS , describing it as a black box. I knew after that it is something common among developer, it even goes sometimes to the point of redirecting their career choices; well, I know people who went backend only for the sake of avoiding CSS.

![](https://media3.giphy.com/media/yYSSBtDgbbRzq/giphy.gif?cid=7941fdc6mjmz5pz6kn0t6t2f90n3a2uu1kemplqdspczdgm1&ep=v1_gifs_search&rid=giphy.gif&ct=g)

the question that triggered me to write this article is what makes what is considered a pillar of web and mobile development to be feared by a lot of people and sometimes blocking their learning journey.

Well, there is no exact answer, and I personally think that it’s a matter of necessity. you will probably always tend to delegate the work if there is someone else that can do it in your team, that’s why I think we should maybe put ourselves in non-comfortable situations to force it a little bit.(like what I am doing right now on my portfolio).

well I’m not here to state the obvious and I’d like to discuss point by point what I think is pushing people from learning at least the basics of CSS.

## **Is CSS Even a Programming Language ,Isn’t that for designers?**

CSS doesn’t work like Java, Python, or any other language where you write logic and loops. Instead, it’s all about declaring styles and hoping the browser interpret what you mean. That’s probably why some developers think of CSS as 'just tweaking settings' rather than 'real coding'—until they actually try to center a div and realize how painful it can be.

I think there’s no point in debating whether CSS is a programming language or not(even with Sass powers). It’s a primordial tool in web development. 

While designers work with vectors and can freely move assets in their Figma, Adobe XD or Sketch files, developers need to convert those design to interactive layouts using CSS(and I can assure you, It's no walk in the park). In a lot of situations, and due to the lack of knowledge of the limitations of the tech stack, programming languages, or frameworks developers are using, designers innovative intent of pushing boundaries can put the developer in a difficult situation, that’s why it is so important to collaborate as the two profiles complement each others and it will be a lot profitable for both to have an idea about the other’s position.

![WebDevWebDesign.png](https://lh3.googleusercontent.com/d/1Smcyv099qHrqsTQ87BslgOGubbQdKSmY)

## Browser compatibility/support

Ever had a layout look perfect in Chrome, then open it in Safari and wonder if your CSS file just got ignored? Yeah, that’s **browser compatibility**. Every browser has its own way of interpreting styles, and sometimes they just don’t agree with each other. It’s the reason why we, developers have trust issues 🥲.

Let's take the Flexbox example (which I’m explaining later) : Internet Explorer 11(latest version of the deprecated browser) was only offering partial support for **Flexible Box** while it is fully supported by Chrome and Safari.

![Compatibility.png](https://lh3.googleusercontent.com/d/1FvmdCaOADuiI8nu24MYuFn8HqxHKAA51)

If you’d like to know more information or test your more css features, you can easily check the compatibility on platforms like [CanIUse](http://caniuse.com) or [MDN](https://developer.mozilla.org/fr/docs/Web/CSS).

You may sometimes find yourself forced to add Vendor Prefixes; they are unique markers added to a CSS property, tailored to a specific browser's rendering engine. It ensures the property works exclusively in that browser, aligning with its implementation. the most used ones are: 

- `o-` for old versions of Opera
- `moz-` for Gecko Engine (Mozilla)
- `webkit-` for Webkit Engine (Chrome, Safari,newer versions of Opera,...)
- `ms-` for Microsoft Engine (Internet Explorer)

## **It’s hard to debug**

Like I said earlier in this post, CSS feels like adjusting the settings and its cascading nature makes it worse, rules can cascade and override one another based on specificity, inheritance, and the order in which they are defined. this leads us to the game changer **!important**, it is the life saver for many. In fact, using the `!important` rule will override all previously applied styles for that specific property on the element and save you a lot of time(it is not the cleanest way tho).

Unlike programming languages that offer error messages or warnings, CSS provides no direct feedback when something goes wrong. Instead, it silently applies the nearest valid rule, making it more difficult to identify issues.

## Grid Layout/Flexbox

![FlexGrid.png](https://lh3.googleusercontent.com/d/1ITrp1KqJL-9cFiHRvnA4OCbTn_Zhhq75)


Before **Flexbox (2012)** and **CSS Grid (2017)** became widely adopted, layouts relied on:

- **Floats:** Elements were floated to create multi-column layouts, but clearing floats was necessary to prevent layout issues.
    
    ```css
    .column {
      float: left;
      width: 50%;
    }
    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }
    
    ```
    
- **Inline-Block:** Allowed elements to sit side by side, but inconsistent spacing due to whitespace between elements was a common issue.
    
    ```css
    .box {
      display: inline-block;
      width: 200px;
      height: 100px;
      background: lightblue;
    }
    
    ```
    
- **Positioning:** Elements were positioned explicitly using absolute or relative positioning, making layouts less flexible.
    
    ```css
    .container {
      position: relative;
    }
    .box {
      position: absolute;
      top: 50px;
      left: 100px;
    }
    
    ```
    

Today, Flexbox and Grid Layout form the backbone of modern web layouts:

Before Flexbox, aligning things in CSS was a nightmare. You had to mess with floats, inline-block (mentioned above), or even weird margin hacks just to center something. Then Flexbox came along and said, 'I got your back.'. Just add `display: flex;`, and suddenly, your elements enter the zone. Want to space them out? `justify-content: space-between;`. for vertical centering use `align-items: center;` and use `justify-content` for horizontal manipulations. It’s not the magic stick for everything but when mastered can save you a lot of time.

**Ideal for:** Navigation bars, buttons, and flexible content blocks.

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

```

---

Grid excels at **two-dimensional** design, controlling both **rows and columns** simultaneously for structured layouts.

- Enable it with `display: grid;`.
- Define layouts using `grid-template-columns` and `grid-template-rows`.

**Ideal for:** Web page layouts, dashboards, and complex grids.

```css

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

```

## **Breakpoints/media queries**

Responsive design isn’t some hidden trick; it’s all about **media queries**, which adjust styles based on screen size, resolution, or device type.

**Breakpoints** are specific screen widths at which a website's layout or design changes to ensure optimal viewing across different devices (e.g., mobile, tablet, desktop). They define when CSS styles should be applied based on screen size.

**Media Queries** are CSS rules that apply styles depending on conditions like screen width, height, resolution, or device orientation. They are used to implement responsive design.

![MediaQueries.png](https://lh3.googleusercontent.com/d/1FqieABSyGYN029ydhy4Wtey1cuu2DE6O)

```css
@media (max-width: 768px) {
  body {
    background-color: lightgray;
  }
}
```

In this case, if the screen width is **768px or smaller**, the background color will change.

## Too many frameworks and tools

Back in my day (not so long ago), we had only one framework, and it was a lifesaver. I'm talking about **Bootstrap 3**, exactly. Now, there is a variety of frameworks available, depending on the size, complexity, and duration of your project.

While there are tons of CSS frameworks, extensions, and preprocessors, I will focus on those I’ve had the chance to work with and share my honest feedback on each one.

**Sass**

As we step into 2024, it's undeniable that CSS has undergone rapid development. Features that were once unique to Sass are now natively integrated into CSS, including variables, functions and Nesting.

following the DRY principle (Don't Repeat Yourself), I find sass the best alternative if you’re not willing to use neither native css or frameworks like tailwindCSS 

**Tailwind CSS**

Tailwind CSS is a **utility-first** framework that lets you build custom designs directly in your HTML by using a set of predefined classes. It's powerful because it promotes **rapid development**, **customizability**, and **flexibility**.

It is my favorite CSS framework at the moment. Its learning curve is steep, but the payoff is worth it for advanced features.

**Bootstrap**

With his latest version, bootstrap still very useful for rapid prototyping and MVPs, but its lack of customization is what is making me not considering it as my first option when I work on a project. 

To sum it up, CSS can be frustrating, it may take time to master, but skipping it limits your ability to build visually appealing user interfaces. It's a fundamental skill every web developer must learn.

Even as a backend developer, understanding frontend basics, including CSS, allows you to contribute to the overall design and user experience, making you a more versatile and valuable member of any development team.
# CSS
CSS stands for **Cascading Style Sheets** - it is a language for styling HTML documents by specifying certain rules for layout and display in key/value pairs. Style Sheets are a simple and powerful method of allowing attachment of rendering information to HTML documents. It used to style the webpages by setting background-color, font color, font size, font family, etc.

A CSS consists of a *set of rules* that defines the styles for a web page. A CSS style rule composed of **selectors** and **declarations**. The selector is an HTML Element *like h3 used in the below example*. The declaration is comprised of a property and a value surrounded by curly braces. In the below example font-family, font-style and color were properties of the selector h3. Arial, italic and red were the values assigned, respectively, to the properties.

*Example:*
 ```  
    h3 { 
        font-family: Arial; 
        font-style: italic; 
        color: red 
        }
```

## CSS Box Model

The CSS box model used to determine how our web page is rendered by browser. It considers each element on the page as a box, CSS allows you to apply different properties that define where and how that element appears. Web pages are made up of rectangular boxes arranged and related to each other. 

![Box model](https://upload.wikimedia.org/wikipedia/commons/e/ed/Box-model.svg)

Every box has 4 parts - **margin**, **border**, **padding** and **content**. The margin is an outermost box,  inside that the border, then padding, then the content is innermost. All box sizes/formatting can be styled with CSS.

**Margin**  -   It is a space between border and margin. It is useful to separate the element from its neighbors. The dimensions are given by the margin-box width and the margin-box height. 

**Border** -  It is the area between the box’s padding and margin. Its dimensions are given by the width and height of the border.

**Padding** -  It is a space around the content area and within the border-box. Its dimensions are given by the width of the padding-box and the height of the padding-box.

**Content** -  It consists of content like text, image, or other media content. It is bounded by the content edge and its dimensions are given by content-box width and height.

## Types of CSS

There are three types of CSS which are given below: 
* Inline CSS
* Internal or Embedded CSS
* External CSS

### Inline CSS

Inline CSS contains the CSS property in the body section attached with element is known as inline CSS. This kind of style is specified within an **HTML tag using style attribute**. 

**Example:**

    <!DOCTYPE html> 
    <html> 
    <head> 
        <title>Inline CSS</title> 
    </head> 
    <body> 
        <p style = "color:#009900; 
		   font-size:50px; 
           font-style:italic; 
           text-align:center;">
			            Hello World
	       </p> 
    </body> 
    </html>  
     
### Internal or Embedded CSS

This can be used when a single HTML document must be styled  **uniquely**. The CSS rule set should be within the HTML file in the *head section* i.e the CSS is embedded within the HTML file.

**Example:**
 ```  
    <!DOCTYPE html> 
    <html> 
    <head> 
        <title>Internal CSS</title> 
        <style> 
            .main { 
                text-align:center;  
            } 
            .hi{ 
                color:#009900; 
                font-size:50px; 
                font-weight:bold; 
            } 
            .greeting { 
                font-style:bold; 
                font-size:20px; 
            } 
        </style> 
    </head> 
    <body> 
        <div class = "main"> 
            <div class ="hi"> Hi, Everyone!!</div>   
            <div class ="greeting"> 
                Hello World!! 
            </div> 
        </div> 
    </body> 
    </html>  
 ```           

### External CSS

External CSS contains separate CSS file which contains only style property with the help of tag attributes (For example class, id, heading, … etc). CSS property written in a separate file with .css extension and should be linked to the HTML document using **link** tag. This means that for each element, style can be set only once and  that will be applied across web pages.
 
**Example:** The file given below contains CSS property. This file should be saved with an .css extension. For Ex: **style.css**

```
    body {
	    background-color:powderblue;
	    }
	.main {
	    text-align:center;
	    }
	.hi {
		color:#009900;
	    font-size:50px;
	    font-weight:bold;
	    }
	#greeting {
	    font-style:bold;
	    font-size:20px; 
	    }
```

Below, we have HTML file that makes use of the above created external style sheet (style.css). This can be achieved by using `<link>` tag. The `<link>` element has *rel* and *href* attributes. The *rel* specifices the relationship between the current document and the linked document. In this case, *rel* attribute value will be *stylesheet* because we going to add the external style sheet to the HTML document. The *href*  attribute is used to specify the location of the external style sheet file.

```
    <html>
        <head> 
            <link rel="stylesheet" href="style.css"/> 
        </head> 
        <body> 
            <div class = "main"> 
                <div class ="hi"> Hi, Everyone !</div> 
                <div id = "greeting "> 
                    Hello world !!
                </div> 
            </div> 
        </body> 
    </html> 
```
## Element Selector

The element selector selects HTML elements by their name / tag name *like a, h1, div, p etc*.

*Example:* Here, we use `<p>` as an element selector. The text inside the `<p>` will be center-aligned also blue color.

```
<!DOCTYPE html>  
<html>  
<head>  
<style>  
p {  
    text-align: center;  
    color: blue;  
}   
</style>  
</head>  
<body>  
<p>This style will be applied on every paragraph.</p>  
<p> Here also</p>
</body>
</html>
```
## Class Selector

In the CSS, the class selector is a name preceded by a period (“.”).  It uses the class attribute of an HTML element to match the specific HTML element. We can have a Class selector specific to an HTML element *like we have `p.class` in the below example*.

In the below example, we have two class selectors inside the `<style>` element. The class selector `.intro` is applied to the element which has an attribute called `class`, whose value is `intro` and the `p.intro`  class selector is applied to the `<p>` element which has an attribute called `class`, whose value is `intro`. Also, the `<p>` element without the `class` attribute doesn't get affected.

```
<!DOCTYPE html>
<html>
<head>
<style>
.intro {
  text-align: center;
  color: red;
}

p.intro {
  text-align: center;
  color: blue;
}
</style>
</head>
<body>

<h1 class="intro">Red and center-aligned heading</h1>
<p class="intro">blue and center-aligned paragraph.</p> 
<p> this will not be affected </p>
</body>
</html>
```

## ID Selector

In the CSS, the ID selector is a name preceded by a hash character (“#”).  It uses the id attribute of an HTML element to match the specific HTML element. The **id** of an element should be unique within a page, so the id selector is used to select one unique element. 

*Example:* Here, we use `#para1` as an ID selector. Inside the body, we have two `<p>` elements. The CSS style rule applied to the element which has an attribute called `id`, whose value is `para1`. Therefore, `Hello World!` will be center-aligned also blue color.

```
<!DOCTYPE html>
<html>
<head>
<style>
#para1 {
  text-align: center;
  color: blue;
}
</style>
</head>
<body>

<p id="para1">Hello World!</p>
<p>This paragraph is not affected by the style.</p>

</body>
</html>
```

> *NOTE:* The id name should start with the alphabet, not with numbers. Also, the HTML element without the 'id' attribute doesn't get affected.


### CSS Padding Property

The CSS padding property allow you to set the padding area for an element that separates its border from its content. The padding property can take one, two, three, or four  values separated by white spaces as listed in the below table. Depending on the list of property values, the HTML element has the padding area on the top, bottom, right, and left.

|Examples| Explanation|
|------|-----|
|`p { padding: 70px; }`| Sets the padding for an `<p>` element to 70 pixels for all four sides |
|`p { padding: 35px 70px; }`|Sets the padding for an `<p>` element to 35 pixels for top and bottom and 70 pixels for right and left sides.|
|`p { padding: 35px 70px 40px; }`|Sets the padding for an `<p>` element to 35 pixels for the top, 70 pixels for the left and right side and 40 pixels for the bottom. |
|`p { padding: 35px 70px 40px 80px; }`| Sets the padding for an `<p>` element to 35 pixels for the top, 70 pixels for the right side, 40 pixels for the bottom and 80 pixels for the left side.|

The padding property is a shorthand property for the padding-top, padding-right, padding-bottom, and padding-left properties. The below examples set padding on a specific side for the HTML element.

*Examples*:
```
h1 { 
	padding-bottom: 10px; 
} 
p { 
	padding-top: 20px; 
	padding-left: 50px;
 }
```

### CSS Margin Property

The CSS margin property is similar to the CSS border property,  but it sets the margins around the sides of an element's box instead of the border. It also takes one, two, three, or four values separated by white spaces. 
The shorthand properties are margin-top, margin-right, margin-bottom, and margin-left to set a margin on respective sides.

*Example:*
```
p {
    margin-left: 10px;
    margin-right: 30px;
}
h1{
    margin: 25px 50px;
}
```

### CSS Display Property

The display property controls the display behaviour of an element.  The CSS display property sets whether an element is treated as a block or inline elements and the layout used for its children, such as flow layout, flex or grid. 

There are two types of HTML elements: **inline-level elements** and **block-level elements**. The differences between these elements affect how you use the box model. 
Both Inline and block-level elements appear within the body of an HTML page. But, inline-level elements are used to create a short structure that can have data and other inline elements. Inline level elements include `<b>`, `<big>`,`< i>`, `<small>`, `<tt>`, `<abbr>`, `<acronym>`, `<code>`, `<strong>`, etc.  
Block-level elements used to create larger structures than inline elements also it starts on new lines by default whereas inline-level elements not. Block elements include `<p>`, `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`,`<h6>`, `<ol>`, `<ul>`, `<pre>`, `<address>`, `<blockquote>`, `<dl>`, `<div>`, `<fieldset>`, `<form>`, `<hr>`, `<table>`, etc .

The Syntax for the display property is `selector {display: value}`. The property values and description with examples are tabulated below:

|Property value | Description | Example|
|------|-----|----|
| block | behaves likes block-level elements| `a {display: block;} `|
| inline| behaves like inline-level elements | ` ul li { display: inline; }`|
|none | elements doesn't generate boxes | ` h1 { display: none;}`|

### CSS Position Property

The position property defines how an element will be arranged on a page. The Syntax for the position property is `selector {position: value}`. The property values are static, relative, absolute, fixed, or inherit.

static - The element's box is arranged automatically consistent with the normal flow.

relative - The element's box position is relative to its normal flow position. You can adjust the normal flow position by using the top, bottom, left and right properties.

absolute - The element's box arranged to an absolute position with reference to its containing block. Its containing block is that the nearest ancestor element that has its position property set to relative, absolute, or fixed. The top, right, bottom, and left properties are used to set the offset of the element's box with reference to its containing block.

fixed - The element's box position is offset from its browser window by using the top, right, bottom, and left properties. The element's box won't move when the browser window is scrolled.

inherit - The inherit keyword is employed to specify that the value for this property should be taken from the parent element. If inherit is used with the root element, then the initial value for this property is going to be used.

*Example:*
```
a {position: static;}
div {position: relative; top: 20px; left: 50px;}
h1 {position: absolute; top: 30px; left: 20px;}
div {position: fixed; top: 325px; left: 60px;}
```
### CSS Color property
	
The color property is used to specify the foreground color of text.The color properties are set using 5 different color notation types which is listed below:

```
a {color: red;}
div {color: #3c5;}
h1 {color: #ffa500;}
div {color: rgb(100,20,255);}
#id1 {color: rgb(30%,50%,70%);} 
```
 ### CSS text-align property

The text-align property is used to align the content inside the element. The text inside the element can be aligned in 4 ways - left, right, center and justify. 

 *Example:* The text-align properties are set to left, right, justify, and center.
```
 div {text-align:left;}
 h1 {text-align: right;}
  p {text-align: justify;}
  div {text-align: center;}
```

# Additional Resources

- [W3Schools](https://www.w3schools.com/)
- [CSS Colors](https://www.w3schools.com/cssref/css_colors.asp)
- [CSS Fonts](https://www.tutorialbrain.com/css_tutorial/css_font_family_list/)
- [Color Palettes](https://coolors.co/palettes/trending)
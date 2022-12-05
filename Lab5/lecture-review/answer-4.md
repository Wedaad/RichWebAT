##### With the aid of a diagram and example code, describe the CSS Box Model and show how it can be used to space DOM elements

##### Answer:
The box model is used to describe the design and layout of websites. The box model defines different how different parts of a box i.e. the margin, border, padding and content work togeteher to display a website the way they're displayed. 

Border - goes around the padding and content
Padding - is the space around the content
Content - is what is displayed e.g. text or images
Margin - the space around the border

![Example image of CSS box model](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif)

##### Code example:
```
CSS:

div {
  width: 300px; - width of the div
  border: 15px solid green; - border
  padding: 50px; - space around the div contents 
  margin: 20px; - space around the div border
}

HTML:
<div></div>
```
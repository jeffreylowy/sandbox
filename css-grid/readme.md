# CSS Grid

Tutorial playlist on [YouTube](https://www.youtube.com/playlist?list=PLu8EoSxDXHP5CIFvt9-ze3IngcdAc2xKG).

### Fundamentals

An element with it's display set to `grid` becomes a container that holds grid items - the direct children of the `grid` element. The grid items can then be placed on grid tracks - rows and columns.

```css
.container {
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr;
  grid-template-rows: 1fr auto 1fr 1fr;
 ...
```

### Implicit vs Explicit Tracks

In this example. the columns are set explicitly set to 200px (column 1) and 400px (column 2) The rows are set implicitly. The browser determines the height and number of rows since we did not explicitly give it a value. The `grid-gap` is set to 20px - this adds space between the tracks. You can think of it like setting margin.

```html
<style>
  div.container {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 200px 400px;
  }
</style>
<body>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
<body>
```

### Grid auto-flow

Grid `auto-flow` tells the browser which direction to implicitly layout items. In the example below we're only setting width for the first two columns. The default value for `grid-auto-flow` is set to `row` - items will wrap to a new row. If set to column, the items will create new columns instead of rows.

```html
<style>
  div.container {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 200px 400px;
    grid-auto-flow: column;
  }
</style>
<body>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
<body>
```

### Sizing Tracks

Grid works similar to a block element. The width will span the entire width of the viewport, while the height will only take up as much space as it's content.

You can use pixels, percentages, em/rem, and fractional units (fr).

### The repeat() Function

The repeat function can be used anywhere inside of `grid-template-columns` or `grid-template-columns`.

This example

Column 1: 250px
Columns 2 - 5: repeat(4, 1fr)
Column 6: 100px
Columns 7-10 repeat(2, 1fr auto) - columns 7 and 9 are `1fr` and column 8 and 10 are `auto`;

```css
div.container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 250px repeat(4, 1fr) 100px repeat(2, 1fr auto);
}
```

### Sizing Grid Items

```css
.container .item:nth-child(8) {
  background: red;
  grid-column: span 2;
}
```

### Placing Grid Items

### Spanning and Placing

### Grid: auto-fit and auto-fill

### Template Areas

### Naming Lines

### Dense Block Fitting (auto-flow)

### Alignment and Centering

### Re-ordering Items

### Nesting Grids (Album layout exercise)

### Flexbox vs Grid

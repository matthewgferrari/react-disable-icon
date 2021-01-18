<h1  align="center"><img  width = "50px"  src = "https://raw.githubusercontent.com/matthewgferrari/react-disble-icon/main/example/disable.png" /> React-Disable-Icon</h1>
<div align="center">
<h4  align = "center">An icon manager to visually disable icons</h4>

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/matthewgferrari/react-disable-icon/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/react-disable-icon)](https://www.npmjs.com/package/react-disable-icon)
[![npm size](https://img.shields.io/bundlephobia/min/react-disable-icon)](https://github.com/matthewgferrari/react-disable-icon/blob/main/src)
</div>
<div  align = "center"><img  src = "https://matthewgferrari.github.io/react-disable-icon/example/demo.gif"/></div>

## Demo

[Live demo and sandbox](https://matthewgferrari.github.io/react-disable-icon/example/build/)

## Installation

React-Disable-Icon is available as an [npm package](https://www.npmjs.com/package/react-disable-icon).

```sh
// with npm
npm install react-disable-icon
```

## Usage
```sh
import React, { useState } from "react"
import IconSwitch from "react-disable-icon"

function App() {
const [disabled, setDisabled] = useState(true)

return (
	<IconSwitch disabled = {disabled} Icon = {<img src = "/react.svg" width="80" height="80"/>} onClick = {()=>setDisabled(!disabled)}/>
)}
```

## Props

| Prop Names| Type  |Required? | Default | Description|
|--|--|--|--|--|
disabled | bool | required | false | Whether icon should have a slash
onClick|function|required|N/A|Function called when icon is clicked
Icon|Rendered React Component| required|N/A| The icon
disabledColor| string| optional|#000|Default color of slash
className| string| optional| N\A|Class name applied to SVG Slash

## Examples

```sh
import React, { useState } from "react"
import IconSwitch from "react-disable-icon"

function App() {
const [disabled, setDisabled] = useState(true)
return (
	<IconSwitch disabled = {disabled} onClick = {()=>setDisabled(!disabled)} Icon = {
		<svg viewbox = "0 0 45 45" width = "44" height = "44">
			<circle cx="22" cy="22" r="21" stroke="black" stroke-width="1" fill="red" />
		</svg> }/>
)}
```

```sh
import React, { useState } from "react"
import IconSwitch from "react-disable-icon"

function App() {
const [disabled, setDisabled] = useState(true)
return (
	<IconSwitch disabled = {disabled} Icon = {
		<img src = "/react.svg" fill = {disabled ? "rgb(115,115,115)" : "#61dafb" } className ={\`reactIcon\${disabled ? "" : " active"}\`} width="80" height="80" style = {{cursor:"pointer"}}/>
	} disabledColor="rgb(115,115,115)" onClick = {()=>setDisabled(!disabled)}/>
)}

/*
CSS
.reactIcon:hover, .reactIcon:hover + svg {
fill:rgb(90, 90, 90)
}

.reactIcon.active:hover{
fill:rgb(99, 183, 206)
}
*/
```
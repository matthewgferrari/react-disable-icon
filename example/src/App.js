import React, { useState } from "react"
import './App.css';
import IconSwitch from "react-disable-icon"
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import theme from "prism-react-renderer/themes/nightOwl";



var examples = [{
  code: `function App() {
  const [disabled, setDisabled] = useState(true)
  return (
        <IconSwitch disabled = {disabled} Icon = {<img src = {process.env.PUBLIC_URL+"/react.svg"} width="80" height="80"/>} onClick = {()=>setDisabled(!disabled)}/>
        );
}`,
  title: "Basic"
},
{
  code: `function App() {
  const [disabled, setDisabled] = useState(true)
  return (
        <IconSwitch disabled = {disabled} Icon = {
          <svg viewbox = "0 0 45 45" width = "44" height = "44">
            <circle cx="22" cy="22" r="21" stroke="black" stroke-width="1" fill="red" />
          </svg>
        } onClick = {()=>setDisabled(!disabled)}/>
       );
}`,
  title: "With SVG"
},
{
  code: `function App() {
  const [disabled, setDisabled] = useState(true)
  return (
        <IconSwitch disabled = {disabled} Icon = {<ReactIcon fill = {disabled ? "rgb(115,115,115)" : "#61dafb" } className ={\`reactIcon\${disabled ? "" : " active"}\`}  width="80" height="80" style = {{cursor:"pointer"}}/>} disabledColor="rgb(115,115,115)" onClick = {()=>setDisabled(!disabled)}/>
       );
}
/*
CSS
.reactIcon:hover, .reactIcon:hover + svg {
  fill:rgb(90, 90, 90)  
}
.reactIcon.active:hover{
  fill:rgb(99, 183, 206)  
}
*/
`,
  title: "Custom CSS"
},
{
  code: `function App() {

    const RandomImage = ({index}) => {
      const [isLoaded, setIsLoaded] = useState(false)

      return (
        <div>
        <img src = {"https://picsum.photos/100?random="+index} width="80" height="80" onLoad = {()=>setIsLoaded(true)} style = {isLoaded ? undefined : {display: "none"} }/>
          {!isLoaded && 
            <div style = {{position:"relative", width:"80px", height:"80px"}}>
             <div style = {{position:"absolute", width:"40px", height:"40px", top:"20px", left:"20px"}} className = "spinner"/>
            </div>     }
        </div>
      )
    }

    const ImageContainer = ({index}) => {
      const [disabled, setDisabled] = useState(true)
      return (
        <IconSwitch disabled = {disabled} Icon = {
        <RandomImage index = {index} />
      } onClick = {()=>setDisabled(!disabled)}/>
      )  
    }

  return (
    Array.from(Array(8).keys()).map((item, index) => {
      return ( 
        <div key = {index} style = {{margin:".5rem"}}>
          <ImageContainer index = {index}/>
        </div>)
    })
    
    );
}
`,
  title: "Multiple Random Images"
}
]
function App() {

  return (
    <div className="App" style={{ marginTop: "1.25rem" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <BigIcon/>
        <div style={{ paddingLeft: "1rem" }}>
          <h1 style={{ padding: "0", marginBottom: "0", marginTop: ".5rem" }}>React-Disable-Icon</h1>
          <h4 style={{ padding: "0", marginTop: "0" }}>An icon manager to visually disable icons</h4>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: ".5rem" }}>
        <svg
          style={{ marginRight: ".5rem" }}
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          viewBox="0 0 438.549 438.549"
        >
          <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" />
        </svg>
        @<a style={{ marginRight: ".5rem" }} href="https://github.com/matthewgferrari/react-disable-icon">matthewgferrari/react-disable-icon</a>
        |
        <svg
          width={50}
          height={20}
          style={{ marginRight: ".5rem", marginLeft: ".5rem" }}
          viewBox="0 0 256 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin meet"
        >
          <path d="M0 0v85.498h71.166V99.83H128V85.498h128V0H0z" fill="#CB3837" />
          <path
            d="M42.502 14.332h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V14.332H42.502zm42.996 0v71.166h28.664V71.166h28.17V14.332H85.498zM128 56.834h-13.838v-28.17H128v28.17zm56.834-42.502h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V28.664h14.332v42.502h14.332V14.332h-57.328z"
            fill="#FFF"
          />
        </svg>

        @<a href="https://www.npmjs.com/package/react-disable-icon">react-disable-icon</a>
      </div>
      {
        examples.map((code, index) => {
          return (
            <div key={index} style={{ marginLeft: "50px", marginRight: "50px", marginBottom: "2rem" }}>
              <h1 style={{ textAlign: "center", marginBottom: ".5rem" }}>{code.title}</h1>
              <LiveProvider code={code.code} scope={{ IconSwitch, useState, ReactIcon, process:{ env: { PUBLIC_URL: process.env.PUBLIC_URL } } }} theme={theme} >
                <div className="wrapper">
                  <div className="editor">
                    <LiveEditor className="editorInner" />
                  </div>
                  <LivePreview className="preview" />
                </div>
                <LiveError className="error" />
              </LiveProvider>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;

const BigIcon = () => {
  const [active, setActive] = useState(true)
  return ( <IconSwitch Icon={<ReactIcon fill = {active ? "rgb(115,115,115)" : "#61dafb" } className ={`reactIcon${active ? "" : " active"}`} width="80" height="80" style = {{cursor:"pointer"}}/>} className ={`reactIcon${active ? "" : " active"}`} disabledColor = {"rgb(115,115,115)"} disabled = {active} onClick = {()=>setActive(!active)} />  )
}


const ReactIcon = (props) => {

return(
  <svg
      id="prefix__Layer_2_1_"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 490.6 436.9"
      xmlSpace="preserve"
      {...props}
    >
      <path
        className="prefix__st0"
        d="M490.6 218.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V0c-27.5 0-63.5 19.6-99.9 53.6C208.7 19.8 172.7.4 145.2.4v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1C40.5 155.4 0 186.1 0 218.5c0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM245.5 352c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zM245 85c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zM80.5 269.1c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM134.3 412c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM145.1.4z"
      />
      <circle className="prefix__st0" cx={245.2} cy={218.5} r={45.7} />
      <path className="prefix__st0" d="M344.8.1z" />
    </svg>
)}
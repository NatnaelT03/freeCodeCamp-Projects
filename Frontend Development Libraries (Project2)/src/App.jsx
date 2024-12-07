import React from "react"
import editor from "/Users/mrnt03/Desktop/freeCodeCamp-Projects/Frontend Development Libraries (Project2)/src/editor.js"
import { Marked, marked } from "marked"

export default function App(){

  const handleChange = (e) => {
    setMarkdown(e.target.value)
  }
 
  const [edit,setEdit] = React.useState(false)
  const [previewer, setPreviewer] = React.useState(false)

  const editorChanger = () => {
    setEdit(!edit)
  }

  const previewerChanger = () => {
    setPreviewer(!previewer)
  }

  const [markdown,setMarkdown] = React.useState(editor)
  return(
    <>
      <div className="head1"
      style = {{display: previewer ? "none" : "block"}          
    }
      >Editor 
      <button onClick={editorChanger}><i className="fa fa-compress"></i></button></div>
      <textarea id="editor"
      value={markdown}
      onChange={handleChange}
      style = {{display: previewer ? "none" : "block",
      height: edit ? "900px" : "200px"}}
      ></textarea>
      <div className="head2"
      style = {{display : edit ? "none" : "block"}}
      >Previewer
      <button onClick={previewerChanger}><i className="fa fa-compress"></i></button></div>
      <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdown)}}
      style = {{display : edit ? "none" : "block"}}
      ></div>
    </>
  )
}
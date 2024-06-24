import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function App() {
  const reactQuillRef = useRef(null);
  const [value, setValue] = useState('');
const handleImageUpload = ()=>{
  const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('image', file);
      console.log(formData)
      try {
        // Replace with your server endpoint
        // const response = await fetch('http://your-server-endpoint/upload', {
        //   method: 'POST',
        //   body: formData,
        // });

        if (true) {
       //   const imageUrl = await response.json();
          const quill = reactQuillRef.current.getEditor();
          console.log(quill)
          const range = quill.getSelection();
          console.log(quill)
          console.log(range)
          quill.insertEmbed(range.index, 'image', "https://fakeimg.pl/250x100/");
        } else {
          console.error('Failed to upload image');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
}
  
  return (
    <>
    <ReactQuill 
    ref={reactQuillRef}
   // theme={{ editorHtml: '', theme: 'snow' }}
    //onChange={this.handleChange}
   // value={this.state.editorHtml}
    modules={
      {
        toolbar:{
          container:[
          
            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
            [{size: []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, 
             {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image', 'video'],
            ['clean']
          ],
          handlers: {
            image: handleImageUpload
          }
        } ,
        
       
      }
    }
    formats={
      [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
      ]
    }
    bounds={'.app'}
    value={value}
    onChange={(e)=>{console.log(e)}}
  //  placeholder={this.props.placeholder}
  
   />
   <div dangerouslySetInnerHTML={{__html:value}} >
   </div>
   </>
  );
}
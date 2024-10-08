import React from "react"
import { Editor } from "@tinymce/tinymce-react"
import { Controller } from "react-hook-form"

export default function RTE ({name ,control ,label ,defauilValue = ""})
 {
   
    
    return(
      <div className="w-full">
        {label && <label className="inline-block mb-1 pl-1">
            {label}</label>}
            <Controller
            name={name || 'content'}
            control={control}
            render={({field:{onChange}})=>(
                <Editor
                initialValue={defauilValue}
                apiKey='q03bspoyjtzreg6il786d7c5faqqroo7w5rrilj3cszd2u8l'
                init={{
                    initialValue:defauilValue,
                    height:500,
                    menubar:true,
                    plugins:[
                        'image',
                        'advlist',
                        'autolink',
                        'lists',
                        'link',
                        'charmap',
                        'preview',
                        'anchor',
                        'searchreplace',
                        'visualblocks',
                        'code',
                        'fullscreen',
                        'insertdatetime',
                        'table',
                        'media',
                        'code',
                        'help',
                        'wordcount',
                    ],
                    toolbar:"undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor |alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                    content_style:"body { font-family : Helvetica, Arial,sans-serif; font-size:14px}"

                }}
                onEditorChange={onChange}
                />
            )}
            />
      </div>
     
    )
}
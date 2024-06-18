"use client"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export default function notification(title,text,icon){
    withReactContent(Swal).fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonColor :'#0faae6',
        confirmButtonText: 'Close'
    })
 
}
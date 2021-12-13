getCSS.onclick=()=>{
    const request =new XMLHttpRequest()
     request.open('get','./style.css')
     request.onload=()=>{
         const style=document.createElement('style')
         style.innerHTML=request.response
         document.head.appendChild(style)
     }
     request.onerror=()=>{
         console.log('失败了');
     }
     request.send()
}
getJS.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('get','./2.js')
    request.onload=()=>{
        const script=document.createElement('script')
        script.innerHTML=request.response
        document.body.appendChild(script)
    }
    request.onerror=()=>{}
    request.send()
}
getHTML.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('get','3.html')
    request.onload=()=>{
        console.log(request.response);
        const div=document.createElement('div')
        div.innerHTML=request.response
        document.body.appendChild(div)
    }
    request.onerror=()=>{}
    request.send()
}
getXML.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('get','4.xml')
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            console.log(request.responseXML);
        }
    }
  
    request.send()
}
getJSON.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('get','5.json')
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            console.log(request.response);
            const obj=JSON.parse(request.response)
            console.log(obj);
        }
    }
  
    request.send()
}

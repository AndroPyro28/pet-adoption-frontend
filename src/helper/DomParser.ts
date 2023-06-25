  export const domParser = (content: string) => {
    
    const el = document.createElement('content');
     el.innerHTML = content
     return el
    // return new DOMParser().parseFromString(content, "text/html").body.innerText;
  } 
  

export const getCookie = (key) => {
  let cookieArr=document.cookie.split(/;\s*/);
  for(let i=0,len=cookieArr.length;i<len;i++)
  {
    if(cookieArr[i]) {
      // 以等号（=）分组
      let cookieSplit=cookieArr[i].split("=");
      if(cookieSplit[0]&&cookieSplit[0]===key){
        return cookieSplit[1]
      }
    }
  }
}

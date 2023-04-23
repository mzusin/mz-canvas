/* 
mzCanvas a TypeScript-based library for manipulating canvas element and 2D graphics in the browser.
Version: 1.0.0
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-canvas
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var s=(t,e)=>{for(let i of e){let n=i[1];if(n===void 0)continue;let l=i[0];t.setAttribute(l,n.toString())}},d=t=>{let e=document.createElement("canvas");return e.width=t.width,e.height=t.height,s(e,[["id",t.id],["class",t.classes],["style",t.style],["title",t.title],["tabindex",t.tabindex],["role",t.role]]),t.fallback&&(e.textContent=t.fallback),{ctx:typeof e.getContext=="function"?e.getContext("2d"):null,$canvas:e}},f=(t,e)=>{t.lineWidth&&(e.lineWidth=t.lineWidth),t.strokeStyle&&(e.strokeStyle=t.strokeStyle)},r=(t,e)=>{t.fillStyle&&(e.fillStyle=t.fillStyle)};var y=(t,e)=>{let{x:i,y:n,w:l,h:a}=t;if(t.clear){e.clearRect(i,n,l,a);return}if(t.radii){r(t,e),f(t,e),e.beginPath(),e.roundRect(i,n,l,a,t.radii),t.fillStyle&&e.fill(),t.strokeStyle&&e.stroke();return}t.fillStyle&&(r(t,e),e.fillRect(i,n,l,a)),t.strokeStyle&&(f(t,e),e.strokeRect(i,n,l,a))},P=(t,e)=>{let{points:i}=t;r(t,e),f(t,e),e.beginPath();for(let n=0;n<i.length;n++){let l=i[n];n===0?e.moveTo(l[0],l[1]):e.lineTo(l[0],l[1])}t.closed&&e.closePath(),t.fillStyle&&e.fill(),t.strokeStyle&&e.stroke()},k=(t,e)=>{let{x:i,y:n,w:l,h:a}=t,o=new Path2D;return t.radii?o.roundRect(i,n,l,a,t.radii):o.rect(i,n,l,a),e&&(t.fillStyle&&(r(t,e),e.fill(o)),t.strokeStyle&&(f(t,e),e.stroke(o))),o};export{d as canvas,r as fill,P as path,y as rect,k as rectPath,f as stroke};
//# sourceMappingURL=mz-canvas.esm.js.map

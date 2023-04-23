/* 
mzCanvas a TypeScript-based library for manipulating canvas element and 2D graphics in the browser.
Version: 1.0.0
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-canvas
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var s=(e,t)=>{for(let i of t){let n=i[1];if(n===void 0)continue;let l=i[0];e.setAttribute(l,n.toString())}},f=e=>{let t=document.createElement("canvas");return t.width=e.width,t.height=e.height,s(t,[["id",e.id],["class",e.classes],["style",e.style],["title",e.title],["tabindex",e.tabindex],["role",e.role]]),e.fallback&&(t.textContent=e.fallback),{ctx:typeof t.getContext=="function"?t.getContext("2d"):null,$canvas:t}},o=(e,t)=>{t.lineWidth&&(e.lineWidth=t.lineWidth),t.strokeStyle&&(e.strokeStyle=t.strokeStyle)},a=(e,t)=>{t.fillStyle&&(e.fillStyle=t.fillStyle)};var g=(e,t)=>{let{x:i,y:n,w:l,h:r}=t;if(t.clear){e.clearRect(i,n,l,r);return}if(t.radii){a(e,t),o(e,t),e.beginPath(),e.roundRect(i,n,l,r,t.radii),t.fillStyle&&e.fill(),t.strokeStyle&&e.stroke();return}t.fillStyle&&(a(e,t),e.fillRect(i,n,l,r)),t.strokeStyle&&(o(e,t),e.strokeRect(i,n,l,r))},u=(e,t)=>{let{points:i}=t;a(e,t),o(e,t),e.beginPath();for(let n=0;n<i.length;n++){let l=i[n];n===0?e.moveTo(l[0],l[1]):e.lineTo(l[0],l[1])}e.closePath(),t.fillStyle&&e.fill(),t.strokeStyle&&e.stroke()};export{f as canvas,a as fill,u as path,g as rect,o as stroke};
//# sourceMappingURL=mz-canvas.esm.js.map

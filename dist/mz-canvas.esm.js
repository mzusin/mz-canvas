/* 
mzCanvas a TypeScript-based library for manipulating canvas element and 2D graphics in the browser.
Version: 1.0.0
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-canvas
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var o=(t,e)=>{for(let n of e){let i=n[1];if(i===void 0)continue;let l=n[0];t.setAttribute(l,i.toString())}},f=t=>{let e=document.createElement("canvas");return e.width=t.width,e.height=t.height,o(e,[["id",t.id],["class",t.classes],["style",t.style],["title",t.title],["tabindex",t.tabindex],["role",t.role]]),t.fallback&&(e.textContent=t.fallback),{ctx:typeof e.getContext=="function"?e.getContext("2d"):null,$canvas:e}},a=(t,e)=>{e.lineWidth&&(t.lineWidth=e.lineWidth),e.strokeStyle&&(t.strokeStyle=e.strokeStyle)},s=(t,e)=>{e.fillStyle&&(t.fillStyle=e.fillStyle)};var u=(t,e)=>{let{x:n,y:i,w:l,h:r}=e;if(e.clear){t.clearRect(n,i,l,r);return}if(e.radii){s(t,e),a(t,e),t.beginPath(),t.roundRect(n,i,l,r,e.radii),e.fillStyle&&t.fill(),e.strokeStyle&&t.stroke();return}e.fillStyle&&(s(t,e),t.fillRect(n,i,l,r)),e.strokeStyle&&(a(t,e),t.strokeRect(n,i,l,r))};export{f as canvas,s as fill,u as rect,a as stroke};
//# sourceMappingURL=mz-canvas.esm.js.map

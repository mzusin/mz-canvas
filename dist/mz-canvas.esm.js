/* 
mzCanvas a TypeScript-based library for manipulating canvas element and 2D graphics in the browser.
Version: 1.0.0
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-canvas
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var a=(t,e)=>{for(let n of e){let i=n[1];if(i===void 0)continue;let l=n[0];t.setAttribute(l,i.toString())}},s=t=>{let e=document.createElement("canvas");return e.width=t.width,e.height=t.height,a(e,[["id",t.id],["class",t.classes],["style",t.style],["title",t.title],["tabindex",t.tabindex],["role",t.role]]),t.fallback&&(e.textContent=t.fallback),{ctx:typeof e.getContext=="function"?e.getContext("2d"):null,$canvas:e}};var f=(t,e)=>{let{x:n,y:i,w:l,h:r}=e;if(e.clear){t.clearRect(n,i,l,r);return}e.fill&&(t.fillStyle=e.fill,t.fillRect(n,i,l,r)),e.stroke&&(e.lineWidth&&(t.lineWidth=e.lineWidth),t.strokeStyle=e.stroke,t.strokeRect(n,i,l,r))};export{s as canvas,f as rect};
//# sourceMappingURL=mz-canvas.esm.js.map

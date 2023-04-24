/* 
mzCanvas a TypeScript-based library for manipulating canvas element and 2D graphics in the browser.
Version: 1.0.0
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-canvas
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var h=(e,t)=>{for(let i of t){let n=i[1];if(n===void 0)continue;let l=i[0];e.setAttribute(l,n.toString())}},d=(e,t)=>{for(let i of e){let n=i[1];if(n===void 0)continue;let l=i[0];t[l]=n}},c=e=>{let t=document.createElement("canvas");return t.width=e.width,t.height=e.height,h(t,[["id",e.id],["class",e.classes],["style",e.style],["title",e.title],["tabindex",e.tabindex],["role",e.role],["aria-label",e.ariaLabel]]),e.fallback&&(t.textContent=e.fallback),{ctx:typeof t.getContext=="function"?t.getContext("2d"):null,$canvas:t}},r=(e,t)=>{d([["lineWidth",e.lineWidth],["strokeStyle",e.strokeStyle],["lineCap",e.lineCap],["lineJoin",e.lineJoin],["miterLimit",e.miterLimit],["lineDashOffset",e.lineDashOffset]],t),e.lineDashSegments&&t.setLineDash(e.lineDashSegments)},f=(e,t)=>{e.fillStyle!==void 0&&(t.fillStyle=e.fillStyle),d([["shadowOffsetX",e.shadowOffsetX],["shadowOffsetY",e.shadowOffsetY],["shadowBlur",e.shadowBlur],["shadowColor",e.shadowColor]],t)};var P=(e,t)=>{let{x:i,y:n,w:l,h:a}=e;if(e.clear){t.clearRect(i,n,l,a);return}if(e.radii){t.save(),f(e,t),r(e,t),t.beginPath(),t.roundRect(i,n,l,a,e.radii),e.fillStyle&&t.fill(),e.strokeStyle&&t.stroke(),t.restore();return}t.save(),e.fillStyle&&(f(e,t),t.fillRect(i,n,l,a)),e.strokeStyle&&(r(e,t),t.strokeRect(i,n,l,a)),t.restore()},C=(e,t)=>{let{points:i}=e;t.save(),f(e,t),r(e,t),t.beginPath();for(let n=0;n<i.length;n++){let l=i[n];n===0?t.moveTo(l[0],l[1]):t.lineTo(l[0],l[1])}e.closed&&t.closePath(),e.fillStyle&&t.fill(),e.strokeStyle&&t.stroke(),t.restore()},R=(e,t)=>{let{x:i,y:n,w:l,h:a}=e,o=new Path2D;return e.radii?o.roundRect(i,n,l,a,e.radii):o.rect(i,n,l,a),t&&(t.save(),e.fillStyle&&(f(e,t),t.fill(o)),e.strokeStyle&&(r(e,t),t.stroke(o)),t.restore()),o},y=(e,t)=>{let{cx:i,cy:n,r:l}=e,a=e.startAngleRad===void 0?0:e.startAngleRad,o=e.endAngleRad===void 0?2*Math.PI:e.endAngleRad;t.save(),t.beginPath(),f(e,t),r(e,t),t.arc(i,n,l,a,o,e.counterclockwise),e.fillStyle&&t.fill(),e.strokeStyle&&(r(e,t),t.stroke()),t.restore()},k=(e,t)=>{let{cx:i,cy:n,r:l}=e,a=e.startAngleRad===void 0?0:e.startAngleRad,o=e.endAngleRad===void 0?2*Math.PI:e.endAngleRad,s=new Path2D;return s.arc(i,n,l,a,o,e.counterclockwise),t&&(t.save(),e.fillStyle&&(f(e,t),t.fill(s)),e.strokeStyle&&(r(e,t),t.stroke(s)),t.restore()),s};export{c as canvas,y as circle,k as circlePath,f as fill,C as path,P as rect,R as rectPath,d as setContextProps,r as stroke};
//# sourceMappingURL=mz-canvas.esm.js.map

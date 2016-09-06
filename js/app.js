function colorizeBar(){var e=["#012459","#003972","#003972","#004372","#004372","#016792","#07729f","#12a1c0","#74d4cc","#efeebc","#fee154","#fdc352","#ffac6f","#fda65a","#fd9e58","#f18448","#f06b7e","#ca5a92","#5b2c83","#371a79","#28166b","#192861","#040b3c","#040b3c"];var t=document.getElementById("colors");for(var n=0;n<e.length;n++){var r=document.createElement("i");r.style.backgroundColor=e[n];t.appendChild(r)}}function load(){colorizeBar();SmartUnderline.init()}window.onload=load;(function(){var e,t,n,r,i,o,a,l,u,d,c,f,m,s,g,p,h,b,v,y,w,x,k,S,C,z,E,A,L,M,T,B,H,I,D,N;window.SmartUnderline={init:function(){},destroy:function(){}};if(!(window["getComputedStyle"]&&document.documentElement.getAttribute)){return}e=1.618034;B="#b4d5fe";C="data-smart-underline-link-color";L="data-smart-underline-link-small";A="data-smart-underline-link-large";k="data-smart-underline-link-always";S="data-smart-underline-link-background-position";E="data-smart-underline-link-hover";a="data-smart-underline-container-id";M=[];D=function(){return+new Date};z={};N=function(){var e;e=0;return function(){return e+=1}}();o=function(e,t){return t.clearRect(0,0,e.width,e.height)};r=function(e,t,n){var r,i,a,l,u,d,c,f,m,s,g;o(t,n);n.fillStyle="red";m=n.measureText(e).width;n.fillText(e,0,0);i=void 0;for(s=a=0,c=m;0<=c?a<=c:a>=c;s=0<=c?++a:--a){for(g=l=0,f=t.height;0<=f?l<=f:l>=f;g=0<=f?++l:--l){u=n.getImageData(s,g,s+1,g+1);d=u.data[0];r=u.data[3];if(d===255&&r>50){if(!i){i=g}if(g>i){i=g}}}}o(t,n);return i};i=function(e){var t,n,i,o,a;n=document.createElement("canvas");i=n.getContext("2d");n.height=n.width=2*parseInt(e.fontSize,10);i.textBaseline="top";i.textAlign="start";i.fontStretch=1;i.angle=0;i.font=e.fontVariant+" "+e.fontStyle+" "+e.fontWeight+" "+e.fontSize+"/"+e.lineHeight+" "+e.fontFamily;t=r("I",n,i);a=r("g",n,i);o=a-t;return{baselineY:t,descenderHeight:o}};n=function(e){var t,n,r,i,o,a,l,u;u=document.createElement("div");u.style.display="block";u.style.position="absolute";u.style.bottom=0;u.style.right=0;u.style.width=0;u.style.height=0;u.style.margin=0;u.style.padding=0;u.style.visibility="hidden";u.style.overflow="hidden";u.style.wordWrap="normal";u.style.whiteSpace="nowrap";a=document.createElement("span");i=document.createElement("span");a.style.display="inline";i.style.display="inline";a.style.fontSize="0px";i.style.fontSize="2000px";a.innerHTML="X";i.innerHTML="X";u.appendChild(a);u.appendChild(i);e.appendChild(u);l=a.getBoundingClientRect();o=i.getBoundingClientRect();e.removeChild(u);t=l.top-o.top;r=o.height;return n=Math.abs(t/r)};t={};g=function(e){var t,n,r,i;n=e.split(",");for(r=0,i=n.length;r<i;r++){t=n[r];if(f(t)){return t}}return false};f=function(e){var t,n,r,i,o;n=document.createElement("canvas");r=n.getContext("2d");o="abcdefghijklmnopqrstuvwxyz0123456789";r.font="72px monospace";t=r.measureText(o).width;r.font="72px "+e+", monospace";i=r.measureText(o).width;if(i===t){return false}return true};h=function(r){var o,a,l,u,d,c,f,m,s,p,h,b,v,y,w,x;s=getComputedStyle(r);b=g(s.fontFamily);if(!b){f=""+Math.random()}else{f="font:"+b+"size:"+s.fontSize+"weight:"+s.fontWeight}c=t[f];if(c){return c}w=i(s),u=w.baselineY,p=w.descenderHeight;m=r.getClientRects();if(!(m!=null?m.length:void 0)){return}o=1;x=m[0].height-o;if(-1<navigator.userAgent.toLowerCase().indexOf("firefox")){o=.98;d=n(r);u=d*x*o}h=u+p;v=parseInt(s.fontSize,10);y=3;a=u+Math.max(y,p/e);if(p===4){a=h-1}if(p===3){a=h}l=Math.round(100*a/x);if(p>2&&v>10&&l<=100){t[f]=l;return l}};x=function(e){var t,n;if(e==="transparent"||e==="rgba(0, 0, 0, 0)"){return true}n=e.match(/^rgba\(.*,(.+)\)/i);if((n!=null?n.length:void 0)===2){t=parseFloat(n[1]);if(t<1e-4){return true}}return false};s=function(e){var t,n,r,i;n=getComputedStyle(e);t=n.backgroundColor;r=e.parentNode;i=!r||r===document.documentElement||r===e;if(n.backgroundImage!=="none"){return null}if(x(t)){if(i){return e.parentNode||e}else{return s(r)}}else{return e}};b=function(e){return u(e)||l(e)};u=function(e){var t,n,r,i,o,a;i=e.children;for(n=0,r=i.length;n<r;n++){t=i[n];if((o=(a=t.tagName)!=null?a.toLowerCase():void 0)==="img"||o==="video"||o==="canvas"||o==="embed"||o==="object"||o==="iframe"){return true}return u(t)}return false};l=function(e){var t,n,r,i,o;i=e.children;for(n=0,r=i.length;n<r;n++){t=i[n];o=getComputedStyle(t);if(o.display!=="inline"){return true}return l(t)}return false};m=function(e){var t;t=getComputedStyle(e).backgroundColor;if(e===document.documentElement&&x(t)){return"rgb(255, 255, 255)"}else{return t}};p=function(e){return getComputedStyle(e).color};I=document.createElement("style");d=function(e,t){var n,r;if(t==null){t=0}n=e.parentNode;r=!n||n===document||n===e;if(r){return t}else{if(n.hasAttribute(a)){t+=1}return t+d(n)}};H=function(e){var t,n,r;r=[];for(n in e){t=e[n];t.depth=d(t.container);r.push(t)}r.sort(function(e,t){if(e.depth<t.depth){return-1}if(e.depth>t.depth){return 1}return 0});return r};y=function(e){var t,n,r,i,o;o=getComputedStyle(e);r=parseFloat(o.fontSize);if((o.textDecorationStyle||o.textDecoration)==="underline"&&o.display==="inline"&&r>=10&&!b(e)){n=s(e);if(n){t=h(e);if(t){e.setAttribute(C,p(e));e.setAttribute(S,t);i=n.getAttribute(a);if(i){z[i].links.push(e)}else{i=N();n.setAttribute(a,i);z[i]={id:i,container:n,links:[e]}}return true}}}return false};T=function(){var e,t,n,r,i,o,l,u,d,c,f,s,g,b,v;v="";i=H(z);f={};for(o=0,u=i.length;o<u;o++){r=i[o];s={};b=r.links;for(l=0,d=b.length;l<d;l++){c=b[l];s[p(c)]=true;f[h(c)]=true}e=m(r.container);for(n in s){g=function(e){if(e==null){e=""}return"["+a+'="'+r.id+'"] a['+C+'="'+n+'"]['+k+"]"+e+",\n["+a+'="'+r.id+'"] a['+C+'="'+n+'"]['+E+"]"+e+":hover"};v+=g()+", "+g(":visited")+" {\n  color: "+n+";\n  text-decoration: none !important;\n  text-shadow: 0.03em 0 "+e+", -0.03em 0 "+e+", 0 0.03em "+e+", 0 -0.03em "+e+", 0.06em 0 "+e+", -0.06em 0 "+e+", 0.09em 0 "+e+", -0.09em 0 "+e+", 0.12em 0 "+e+", -0.12em 0 "+e+", 0.15em 0 "+e+", -0.15em 0 "+e+";\n  background-color: transparent;\n  background-image: -webkit-linear-gradient("+e+", "+e+"), -webkit-linear-gradient("+e+", "+e+"), -webkit-linear-gradient("+n+", "+n+");\n  background-image: -moz-linear-gradient("+e+", "+e+"), -moz-linear-gradient("+e+", "+e+"), -moz-linear-gradient("+n+", "+n+");\n  background-image: -o-linear-gradient("+e+", "+e+"), -o-linear-gradient("+e+", "+e+"), -o-linear-gradient("+n+", "+n+");\n  background-image: -ms-linear-gradient("+e+", "+e+"), -ms-linear-gradient("+e+", "+e+"), -ms-linear-gradient("+n+", "+n+");\n  background-image: linear-gradient("+e+", "+e+"), linear-gradient("+e+", "+e+"), linear-gradient("+n+", "+n+");\n  -webkit-background-size: 0.05em 1px, 0.05em 1px, 1px 1px;\n  -moz-background-size: 0.05em 1px, 0.05em 1px, 1px 1px;\n  background-size: 0.05em 1px, 0.05em 1px, 1px 1px;\n  background-repeat: no-repeat, no-repeat, repeat-x;\n}\n\n"+g("::selection")+" {\n  text-shadow: 0.03em 0 "+B+", -0.03em 0 "+B+", 0 0.03em "+B+", 0 -0.03em "+B+", 0.06em 0 "+B+", -0.06em 0 "+B+", 0.09em 0 "+B+", -0.09em 0 "+B+", 0.12em 0 "+B+", -0.12em 0 "+B+", 0.15em 0 "+B+", -0.15em 0 "+B+";\n  background: "+B+";\n}\n\n"+g("::-moz-selection")+" {\n  text-shadow: 0.03em 0 "+B+", -0.03em 0 "+B+", 0 0.03em "+B+", 0 -0.03em "+B+", 0.06em 0 "+B+", -0.06em 0 "+B+", 0.09em 0 "+B+", -0.09em 0 "+B+", 0.12em 0 "+B+", -0.12em 0 "+B+", 0.15em 0 "+B+", -0.15em 0 "+B+";\n  background: "+B+";\n}"}}for(t in f){v+="a["+S+'="'+t+'"] {\n  background-position: 0% '+t+"%, 100% "+t+"%, 0% "+t+"%;\n}"}return I.innerHTML=v};w=function(){var e,t,n;t=this;e=t.hasAttribute(E);if(!e){n=y(t);if(n){t.setAttribute(E,"");return T()}}};v=function(e){var t,n,r,i,o,a;a=D();i=document.querySelectorAll((e.location?e.location+" ":"")+"a");if(!i.length){return}z={};for(t=0,n=i.length;t<n;t++){r=i[t];o=y(r);if(o){r.setAttribute(k,"")}else{r.removeEventListener("mouseover",w);r.addEventListener("mouseover",w)}}T();document.body.appendChild(I);return M.push(D()-a)};c=function(){var e,t,n,r,i,o;if((r=I.parentNode)!=null){r.removeChild(I)}Array.prototype.forEach.call(document.querySelectorAll("["+E+"]"),function(e){return e.removeEventListener(w)});i=[C,L,A,k,E,a];o=[];for(t=0,n=i.length;t<n;t++){e=i[t];o.push(Array.prototype.forEach.call(document.querySelectorAll("["+e+"]"),function(t){return t.removeAttribute(e)}))}return o};window.SmartUnderline={init:function(e){if(e==null){e={}}if(document.readyState==="loading"){window.addEventListener("DOMContentLoaded",function(){return v(e)});return window.addEventListener("load",function(){c();return v(e)})}else{c();return v(e)}},destroy:function(){return c()},performanceTimes:function(){return M}}}).call(this);
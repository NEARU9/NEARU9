(function(){
var s=11;function r(){s=(s*16807)%2147483647;return s/2147483647}
var f='';for(var i=0;i<18;i++)f+='<i class="fx ff" style="left:'+(5+r()*90).toFixed(1)+'%;top:'+(50+r()*42).toFixed(1)+'%;animation-delay:'+(r()*9).toFixed(1)+'s;animation-duration:'+(7+r()*6).toFixed(1)+'s"></i>';
document.getElementById('ffs').innerHTML=f;
var hero=document.getElementById('hero'),pz=document.getElementById('pz'),cp=document.getElementById('copy'),bar=document.getElementById('bar');
document.getElementById('mode').onclick=function(){hero.classList.toggle('day');this.textContent=hero.classList.contains('day')?'☀':'☾'};
var wpE=document.getElementById('wp');var cur=0,tgt=scrollY,mx=0,my=0,cx=0,cy=0;
addEventListener('scroll',function(){tgt=scrollY;var m=document.documentElement.scrollHeight-innerHeight;bar.style.width=(m>0?tgt/m*100:0)+'%'},{passive:true});
addEventListener('pointermove',function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5},{passive:true});
(function loop(){cur+=(tgt-cur)*.085;cx+=(mx-cx)*.06;cy+=(my-cy)*.06;if(Math.abs(tgt-cur)<.05)cur=tgt;
pz.style.transform='translate3d('+(cx*-14)+'px,'+(cur*.28+cy*-8)+'px,0) scale('+(1.03+cur/5000)+')';
cp.style.transform='translate3d('+(cx*6)+'px,'+(cur*.45)+'px,0)';if(wpE)wpE.style.transform='translate3d('+(cx*-10)+'px,'+(cy*-6)+'px,0) scale(1.02)';cp.style.opacity=Math.max(0,1-cur/(innerHeight*.65));
requestAnimationFrame(loop)})();
var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting)x.target.classList.add('in')})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
var ln=[].slice.call(document.querySelectorAll('nav ul a'));
var so=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting&&!document.body.classList.contains('inworld'))ln.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+x.target.id)})})},{threshold:.35});
document.querySelectorAll('#hero,#about,#projects,#contact').forEach(function(el){so.observe(el)});
})();

(function(){
var W=document.getElementById('world'),st=document.getElementById('wstage'),wp=document.getElementById('wp'),hint=document.getElementById('whint'),isOpen=false;
document.getElementById('wbg').style.backgroundImage='url('+document.getElementById('wimg').src+')';
var ln=[].slice.call(document.querySelectorAll('nav ul a'));
function setOn(h){ln.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')===h)})}
function openW(){if(isOpen)return;isOpen=true;W.classList.add('open');W.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';document.body.classList.add('inworld');setOn('#world')}
function closeW(){isOpen=false;W.classList.remove('open');W.setAttribute('aria-hidden','true');document.body.style.overflow='';document.body.classList.remove('inworld')}
function route(){var h=location.hash;if(h==='#world')openW();else if(isOpen){closeW();setOn(h||'#hero');var t=h&&document.getElementById(h.slice(1));if(t)t.scrollIntoView();else scrollTo(0,0)}}
addEventListener('hashchange',route);route();
addEventListener('keydown',function(e){if(e.key==='Escape'&&isOpen)location.hash='#hero'});
var fx=document.getElementById('wfx'),h='';
[[503,340],[400,452],[685,488],[1007,230],[1161,322],[1270,380],[1021,452],[783,708]].forEach(function(p,i){h+='<i class="fx glow" style="left:'+(p[0]/16.72)+'%;top:'+(p[1]/9.41)+'%;animation-delay:'+(i*.37)+'s;animation-duration:'+(2+i%3*.5)+'s"></i>'});
[[838,215],[357,398],[537,480],[474,520],[1152,522],[1262,490],[1315,415],[28,185],[218,112],[1100,495],[115,243]].forEach(function(p,i){h+='<i class="fx sp" style="left:'+(p[0]/16.72)+'%;top:'+(p[1]/9.41)+'%;animation-delay:'+(i*.45)+'s"></i>'});
for(var i=0;i<26;i++)h+='<i class="fx ff" style="left:'+(4+Math.random()*92).toFixed(1)+'%;top:'+(55+Math.random()*40).toFixed(1)+'%;animation-delay:'+(Math.random()*9).toFixed(1)+'s;animation-duration:'+(7+Math.random()*6).toFixed(1)+'s"></i>';
fx.innerHTML=h;
setInterval(function(){if(!isOpen)return;var s=document.createElement('i');s.className='ss';s.style.left=(45+Math.random()*50)+'%';s.style.top=(2+Math.random()*22)+'%';wp.appendChild(s);setTimeout(function(){s.remove()},1300)},3600);
var S={},busy={},idx={};[].forEach.call(wp.querySelectorAll('.chr'),function(b){S[b.dataset.k]=b});
function say(k,t){var b=S[k],d=document.createElement('div');d.className='bub';d.textContent=t;d.style.left=(parseFloat(b.style.left)+parseFloat(b.dataset.w)/2)+'%';d.style.top=b.style.top;wp.appendChild(d);setTimeout(function(){d.remove()},2400)}
function burst(x,y,n,c){for(var i=0;i<n;i++){var p=document.createElement('i');p.className='pt';p.style.left=x+'%';p.style.top=y+'%';p.style.background=c[i%c.length];var a=Math.random()*6.28,d=20+Math.random()*50;p.style.setProperty('--dx',Math.cos(a)*d+'px');p.style.setProperty('--dy',(Math.sin(a)*d-20)+'px');wp.appendChild(p);(function(q){setTimeout(function(){q.remove()},900)})(p)}}
var A={witchL:{s:['Careful with my hat!','Time for a spell?'],c:'hop',t:900},
boy:{s:['Hi there! 👋','Nice to meet you!'],c:'wave',t:1200},
reader:{s:['Just one more chapter…','Shh… plot twist!'],c:'hop',t:900},
boy2:{s:['Welcome to my world!','Data, code & a little magic.'],c:'wave',t:1200},
blob:{s:['Mochi~','*wobble wobble*'],c:'roll',t:1500},
witchR:{s:['Abracadabra! ✨','Watch this spell!'],c:'cast',t:1400,b:1},
catL:{s:['Meow~','Mrrp? ♥'],c:'hop',t:900},catR:{s:['Purr purr…','Mew!'],c:'hop',t:900},
catT0:{s:['Nyaa!','Top of the world!'],c:'leap',t:1100},catT1:{s:['Mew!','Mine. This hill is mine.'],c:'hop',t:900},
catT2:{s:['Nyaa~','*yawn*'],c:'hop',t:900},catT3:{s:['Meow!','Look at the stars!'],c:'leap',t:1100}};
function act(k){var a=A[k],b=S[k];if(busy[k])return;busy[k]=1;idx[k]=((idx[k]||0)+1)%a.s.length;say(k,a.s[idx[k]]);b.classList.add(a.c);
if(k==='witchL')wp.classList.add('awake');
if(a.b)burst(65.6,70.3,16,['#fff','#ffd9a0','#b9a6ff','#ff9ac8']);else burst(parseFloat(b.style.left)+b.dataset.w/2,parseFloat(b.style.top)+2,7,['#fff','#ffd9a0','#ff9ac8']);
hint.classList.add('gone');
setTimeout(function(){b.classList.remove(a.c);busy[k]=0;if(k==='witchL')wp.classList.remove('awake')},a.t)}
Object.keys(S).forEach(function(k){S[k].addEventListener('click',function(e){e.stopPropagation();act(k)})});
st.addEventListener('click',function(e){var r=st.getBoundingClientRect();burst((e.clientX-r.left)/r.width*100,(e.clientY-r.top)/r.height*100,9,['#fff','#ffd9a0','#b9a6ff']);hint.classList.add('gone')});
function wander(k,lo,hi){var el=S[k],x=parseFloat(el.style.left);(function go(){if(busy[k]||!isOpen){setTimeout(go,1500);return}
var nx=lo+Math.random()*(hi-lo),d=Math.abs(nx-x);el.classList.toggle('face',nx<x);el.classList.add('walk');el.style.transitionDuration=(d*.6)+'s';el.style.left=nx+'%';x=nx;
setTimeout(function(){el.classList.remove('walk')},d*600);setTimeout(go,3200+Math.random()*4200)})()}
wander('catL',35.4,37.4);wander('catR',71.6,75.4);
})();

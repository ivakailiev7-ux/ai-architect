/* AI ARCHITECT - RUN 01 shared interactions */
(function(){
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll reveal
  var els = document.querySelectorAll('.reveal');
  if(reduce || !('IntersectionObserver' in window)){
    els.forEach(function(el){ el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold:.16 });
    els.forEach(function(el){ io.observe(el); });
  }

  if(!reduce){
    // Cursor spotlight
    var spot = document.querySelector('.fx-spot'), raf=false, mx=50, my=28;
    window.addEventListener('pointermove', function(e){
      mx=(e.clientX/window.innerWidth)*100; my=(e.clientY/window.innerHeight)*100;
      if(!raf){ raf=true; requestAnimationFrame(function(){ if(spot){ spot.style.setProperty('--mx',mx+'%'); spot.style.setProperty('--my',my+'%'); } raf=false; }); }
    }, {passive:true});

    // 3D tilt
    document.querySelectorAll('[data-tilt]').forEach(function(el){
      var inner = el.querySelector('.tilt-in') || el;
      var sheen = el.querySelector('.sheen');
      var max = parseFloat(el.getAttribute('data-tilt-max')) || 11;
      el.addEventListener('pointermove', function(e){
        var r = el.getBoundingClientRect();
        var px=(e.clientX-r.left)/r.width, py=(e.clientY-r.top)/r.height;
        inner.style.transform='rotateX('+((0.5-py)*2*max).toFixed(2)+'deg) rotateY('+((px-0.5)*2*max).toFixed(2)+'deg)';
        if(sheen){ sheen.style.setProperty('--sx',(px*100)+'%'); sheen.style.setProperty('--sy',(py*100)+'%'); }
      });
      el.addEventListener('pointerleave', function(){ inner.style.transform=''; });
    });

    // Magnetic
    document.querySelectorAll('.magnetic').forEach(function(el){
      el.addEventListener('pointermove', function(e){
        var r=el.getBoundingClientRect();
        el.style.transform='translate('+((e.clientX-(r.left+r.width/2))*0.25).toFixed(1)+'px,'+((e.clientY-(r.top+r.height/2))*0.35).toFixed(1)+'px)';
      });
      el.addEventListener('pointerleave', function(){ el.style.transform=''; });
    });
  }

  // Waitlist form (only on pages that have it) -> SAME-ORIGIN /api/contact (Resend)
  var form = document.getElementById('waitlist-form'), note = document.getElementById('form-note');
  if(form){
    form.addEventListener('submit', function(ev){
      ev.preventDefault();
      var emailEl=document.getElementById('email'), btn=form.querySelector('button');
      if(!emailEl.value || !emailEl.checkValidity()){ emailEl.focus(); return; }
      btn.disabled=true; btn.textContent='Joining...';
      var data=new FormData();
      data.append('name','RUN 01 Waitlist'); data.append('email',emailEl.value);
      data.append('website','apparel-waitlist'); data.append('message','RUN 01 apparel waitlist signup');
      data.append('botcheck', form.botcheck ? form.botcheck.value : '');
      fetch('/api/contact',{method:'POST',body:data})
        .then(function(r){ return r.json().catch(function(){ return {}; }); })
        .then(function(res){
          if(res && res.success){ form.style.display='none'; note.textContent="You are on the list. Watch your inbox for RUN 01."; note.style.color='var(--text)'; }
          else { btn.disabled=false; btn.textContent='Join the waitlist'; note.textContent='Something went wrong. Please try again.'; }
        })
        .catch(function(){ btn.disabled=false; btn.textContent='Join the waitlist'; note.textContent='Network error. Please try again.'; });
    });
  }
})();

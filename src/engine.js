export function attachExperience() {
(() => {
  'use strict';
  const recipients = [
    {name:"Đặng Thị Thảo Trang", short:"Thảo Trang", department:"Culture and People", role:"Business Partner, Culture and People", heartWish:"Trang ơi, cảm ơn vì đã luôn dành chỗ cho câu chuyện và cảm xúc của mọi người giữa bao nhiêu việc cần lo. Mong hôm nay cũng có người hỏi Trang: “Có gì để tụi mình giúp không?”", salutation:"Gửi Thảo Trang,", body:"Làm công việc kết nối con người đôi khi là nhớ những điều rất nhỏ mà người khác dễ bỏ qua. Anh em biết phía sau một tập thể gắn kết là nhiều sự lắng nghe, kiên nhẫn và quan tâm. Cảm ơn Trang vì phần công sức ấy. Chúc Trang có thêm nhiều ý tưởng hay, gặp những người đồng hành chân thành, và có những ngày được thảnh thơi mà không phải lo cho ai trước. Hôm nay, cứ để mọi người dành sự quan tâm cho Trang nhé."},
    {name:"Nguyễn Thùy Linh", short:"Thùy Linh", department:"Finance and Accounting", role:"Finance Lead, Funding & Working Capital", heartWish:"Linh ơi, giữa những con số luôn cần thật chính xác, chúc Linh có một ngày chẳng phải tính toán gì ngoài chuyện tối nay ăn món gì mình thích.", salutation:"Gửi Thùy Linh,", body:"Anh em biết đằng sau những kế hoạch tài chính trôi chảy là rất nhiều giờ suy nghĩ, kiểm tra và chịu trách nhiệm với từng quyết định. Cảm ơn Linh vì sự chắc chắn mà Linh mang đến cho công việc chung. Chúc Linh giữ được bản lĩnh trước những bài toán khó, luôn có đồng đội để cùng san sẻ và có thêm nhiều cơ hội làm điều mình muốn. Ngoài những con số cần cân bằng, mong cuộc sống của Linh luôn có thật nhiều điều không cần đong đếm: tiếng cười, sự bình yên và những người thương."},
    {name:"Tô Hoàng Minh Trang", short:"Minh Trang", department:"Legal", role:"Legal Counsel Associate", heartWish:"Minh Trang ơi, cảm ơn vì sự cẩn thận giúp cả đội yên tâm hơn trước những quyết định quan trọng. Hôm nay có một điều khoản không cần thương lượng: Trang phải được vui!", salutation:"Gửi Minh Trang,", body:"Có những đóng góp không ồn ào nhưng khiến mọi người yên tâm hơn rất nhiều, như một lời tư vấn đúng lúc hay một chi tiết được xem xét kỹ. Cảm ơn Minh Trang vì đã làm công việc đòi hỏi sự cẩn trọng ấy mỗi ngày. Mong Trang luôn vững vàng khi bảo vệ điều mình tin là đúng, tiếp tục học được nhiều điều mới và nhận lại sự tin tưởng xứng đáng. Còn hôm nay, tạm gác những điều khoản dài: chỉ cần Trang vui, được nghỉ ngơi và được yêu thương thật nhiều."},
    {name:"Như Thảo", short:"Thảo", department:"Business", role:"Business Operations Associate", heartWish:"Thảo ơi, cảm ơn vì đã giúp nhiều việc của cả đội chạy êm hơn mỗi ngày. Chúc hôm nay có thật nhiều người chủ động san sẻ để Thảo được nghỉ tay một chút.", salutation:"Gửi Thảo,", body:"Công việc vận hành có một điều rất đặc biệt: khi mọi thứ suôn sẻ, người ta đôi khi quên mất đã có ai đó âm thầm sắp xếp, theo dõi và gỡ rối phía sau. Anh em muốn cảm ơn Thảo vì những nỗ lực như thế. Chúc Thảo ngày càng tự tin với cách làm của mình, có cơ hội thử những ý tưởng mới và được ghi nhận vì những gì mình đóng góp. Đặc biệt, mong Thảo luôn có đủ thời gian cho bản thân, không chỉ khi công việc đã xong."},
    {name:"Đỗ Hoàng Anh Thư", short:"Anh Thư", department:"Tech", role:"Project & Partnership Executive", heartWish:"Anh Thư ơi, mong những cuộc gặp sắp tới không chỉ mở ra cơ hội tốt mà còn mang đến những người thật sự dễ mến để đồng hành lâu dài.", salutation:"Gửi Anh Thư,", body:"Giữa lịch dự án, những cuộc trao đổi và rất nhiều đầu việc cần kết nối, việc giữ cho mọi người cùng nhìn về một hướng không hề đơn giản. Cảm ơn Thư vì đã bỏ công vun đắp những mối quan hệ và cơ hội cho cả đội. Chúc Thư luôn mạnh dạn nói lên ý tưởng của mình, có thêm những dự án khiến mình tự hào và gặp những đối tác biết trân trọng sự chân thành. Sau những ngày bận rộn, mong Thư cũng có những buổi tối thật nhẹ nhàng cho riêng mình."},
    {name:"Hoàng Kim Ngân", short:"Kim Ngân", department:"Tech", role:"AI Business Analyst", heartWish:"Ngân ơi, chúc những câu hỏi hay của Ngân luôn gặp người sẵn lòng lắng nghe. Đôi khi một câu hỏi đúng còn đáng giá hơn rất nhiều câu trả lời nhanh.", salutation:"Gửi Kim Ngân,", body:"Làm việc giữa bài toán kinh doanh và công nghệ mới chắc hẳn có không ít lúc phải hỏi lại, thử lại rồi tìm một cách diễn đạt dễ hiểu hơn. Chính sự tò mò và kiên trì ấy làm nên những giải pháp có ích. Anh em chúc Ngân luôn giữ được thói quen đặt câu hỏi, đủ tự tin đưa ra góc nhìn riêng và gặp những đồng đội cùng hào hứng với ý tưởng của mình. Quan trọng nhất, mong Ngân nhớ rằng giá trị của mình không chỉ nằm ở một bản phân tích hay một lần nghiệm thu thành công."},
    {name:"Nguyễn Thị Huyền Diệu", short:"Huyền Diệu", department:"Tech", role:"Business Analyst", heartWish:"Diệu ơi, cảm ơn vì đã kiên nhẫn nghe đủ các góc nhìn để tìm tiếng nói chung. Hôm nay chỉ có một requirement thôi: Diệu được vui theo cách mình muốn.", salutation:"Gửi Huyền Diệu,", body:"Có lẽ không phải lúc nào mọi người cũng nhìn thấy hết công sức phía sau một yêu cầu được viết rõ ràng: những lần hỏi thêm, lắng nghe rồi nối các ý kiến rất khác nhau. Cảm ơn Diệu vì sự tỉ mỉ trong những việc ấy. Chúc Diệu tiếp tục có những dự án thú vị, được tin tưởng giao cho bài toán đủ hay để mình lớn lên và luôn có người cùng tháo gỡ lúc khó. Ngoài những kế hoạch công việc, mong Diệu dành một phần ưu tiên thật cao cho niềm vui của chính mình."},
    {name:"Đặng Thị Bích Trâm", short:"Bích Trâm", department:"Tech", role:"AI & Technology Associate", heartWish:"Trâm ơi, mong Trâm luôn giữ sự háo hức khi gặp điều chưa biết. Thử chưa ra thì thử tiếp, nhưng cũng nhớ tự thưởng cho mình vì đã dám bắt đầu nhé.", salutation:"Gửi Bích Trâm,", body:"Công nghệ thay đổi nhanh đến mức đôi khi vừa hiểu xong một điều đã xuất hiện thêm điều mới để khám phá. Anh em mong Trâm luôn giữ được sự tò mò và tinh thần dám thử ấy. Không phải ý tưởng nào cũng đúng ngay từ đầu, nhưng mỗi lần hỏi, học và thử đều giúp mình tiến thêm một chút. Chúc Trâm có thêm những cơ hội được làm điều mình hứng thú, những người đồng đội sẵn lòng chỉ dẫn và đủ bình yên để tận hưởng cả chặng đường, chứ không chỉ kết quả cuối cùng."}
  ];
  const wishText = {"happiness": "Bạn chọn niềm vui. Chúc bạn có những ngày đủ nhẹ để bật cười vì chuyện nhỏ, và đủ người thương để cùng chia sẻ chuyện vui lẫn chuyện khó.", "peace": "Bạn chọn bình yên. Chúc bạn luôn có một khoảng riêng để nghỉ ngơi, được nói “hôm nay mình mệt” mà không phải giải thích quá nhiều.", "luck": "Bạn chọn điều may mắn. Mong những cơ hội phù hợp tìm đến bạn, và khi chúng xuất hiện, bạn đủ tự tin để nắm lấy theo cách của mình."};
  const flowers = {
  "lily": {
    "name": "Hồng phấn",
    "short": "Lily",
    "image": "assets/pink-lilies.jpg",
    "alt": "Đóa lily hồng",
    "accent": "#bd658a",
    "dark": "#88395f",
    "pale": "#f9e3ed",
    "haze": "#efd0e0"
  },
  "rose": {
    "name": "Hồng dâu",
    "short": "Lily",
    "image": "assets/pink-lilies.jpg",
    "alt": "Đóa lily hồng",
    "accent": "#ae4f6f",
    "dark": "#7f2b4c",
    "pale": "#f8dde6",
    "haze": "#efbbcE"
  },
  "tulip": {
    "name": "Cam đào",
    "short": "Lily",
    "image": "assets/pink-lilies.jpg",
    "alt": "Đóa lily hồng",
    "accent": "#d97f64",
    "dark": "#9e4b43",
    "pale": "#feeee5",
    "haze": "#f7d6c6"
  },
  "baby": {
    "name": "Kem sữa",
    "short": "Lily",
    "image": "assets/pink-lilies.jpg",
    "alt": "Đóa lily hồng",
    "accent": "#ac8674",
    "dark": "#755448",
    "pale": "#fbf1e5",
    "haze": "#efe0d0"
  },
  "hydrangea": {
    "name": "Xanh trời",
    "short": "Lily",
    "image": "assets/pink-lilies.jpg",
    "alt": "Đóa lily hồng",
    "accent": "#638dc2",
    "dark": "#3c6194",
    "pale": "#e8f1fe",
    "haze": "#d0e2f7"
  }
};
  const wishes = [
    "Chúc bạn có người nhận ra bạn đã cố gắng nhiều thế nào, kể cả trong những ngày bạn chẳng nói ra.",
    "Chúc bạn được làm việc với những người không chỉ giỏi, mà còn tử tế với nhau.",
    "Chúc một buổi chiều bận rộn khép lại bằng bữa cơm ngon và một cuộc trò chuyện vui.",
    "Chúc bạn luôn có đủ can đảm để bắt đầu điều mới và đủ kiên nhẫn với bản thân khi học nó.",
    "Chúc hôm nay có ai đó chủ động hỏi thăm bạn, chỉ vì thật lòng muốn biết bạn có ổn không.",
    "Chúc những điều bạn làm bằng sự tận tâm được nhìn thấy và trân trọng đúng cách.",
    "Chúc bạn có một ngày được là chính mình, không phải gồng lên để trở thành phiên bản hoàn hảo.",
    "Chúc khi gặp việc khó, bạn không phải xoay xở một mình mà có người cùng tìm cách.",
    "Chúc bạn có thời gian cho một sở thích nhỏ vẫn luôn khiến mình thấy háo hức.",
    "Chúc công việc mang đến niềm tự hào, nhưng không lấy đi những niềm vui khác của bạn.",
    "Chúc bạn được lắng nghe hết câu, nhất là khi đang nói về điều thật sự quan trọng.",
    "Chúc trong những ngày không như ý, bạn vẫn nhớ mình đã đi xa đến đâu.",
    "Chúc điện thoại hôm nay có nhiều tin nhắn hỏi han hơn những lời nhắc công việc.",
    "Chúc mỗi bước tiến nhỏ đều được bạn ghi nhận, thay vì chỉ nhìn vào chặng đường còn lại.",
    "Chúc bạn có những người bạn để cùng cười thật to và cũng đủ tin để kể chuyện buồn.",
    "Chúc bạn được nghỉ ngơi mà không thấy cần phải xin lỗi vì điều đó.",
    "Chúc một cơ hội đẹp mở ra từ chính ý tưởng bạn đã can đảm lên tiếng.",
    "Chúc những điều giản dị như trời đẹp, cà phê ngon hay đường về ít kẹt xe cũng làm bạn vui.",
    "Chúc bạn luôn tìm được cảm hứng mới, ngay cả khi công việc có những ngày lặp lại.",
    "Chúc bạn có chỗ dựa khi mệt và đủ khoảng trời riêng khi muốn được yên tĩnh.",
    "Chúc lời cảm ơn bạn xứng đáng nhận được sẽ không bị bỏ quên giữa những ngày vội.",
    "Chúc bạn gặp những người khiến mình tự tin hơn, chứ không phải phải thu nhỏ bản thân.",
    "Chúc những nỗ lực âm thầm rồi sẽ nở hoa theo cách bạn không ngờ tới.",
    "Chúc tối nay bạn ngủ thật ngon, không còn mang theo danh sách việc chưa xong.",
    "Chúc bạn có nhiều dịp mỉm cười vì mình đã dám làm một điều khó.",
    "Mong bạn được quan tâm bằng những hành động nhỏ, không chỉ trong những ngày có hoa và quà.",
    "Chúc người thương hiểu cả những điều bạn chưa kịp nói thành lời.",
    "Chúc bạn có đủ thời gian để sống chậm với những điều mình yêu quý.",
    "Chúc hành trình của bạn có những bất ngờ đáng nhớ và những ngày bình thường thật yên.",
    "Chúc niềm vui đến từ những điều thật lòng, không phải từ những lời chúc cho có."
  ];
  const $=s=>document.querySelector(s); const $$=s=>[...document.querySelectorAll(s)];
  const app=$('#app'), scenes=$$('.scene'), progress=$$('#progress span');
  let person=null,flower=null,wish=null,step='gate',caught=0,growth=0,holdStart=0,holdFrame=0,holding=false,holdCompleted=false,wishesDeck=[],collectedWishes=[];
  let gardenTimers=[];
  // Normalize spacing and hidden clipboard characters before looking up a recipient.
  // Some Vietnamese IMEs put tone marks in a different position (Thùy / Thuỳ),
  // so try an accent-insensitive fallback only when exactly one recipient matches.
  function cleanName(s){return String(s).normalize('NFKC').replace(/[\u200B-\u200D\u2060\uFEFF]/g,'').replace(/\s+/g,' ').trim().toLocaleLowerCase('vi-VN')}
  function foldedName(s){return cleanName(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d')}
  function findRecipients(input){
    const exact=foldedName(input);
    if(!exact)return [];
    const full=recipients.filter(p=>foldedName(p.name)===exact);
    if(full.length)return full;
    // Multiple people can share a first, middle or last name (e.g. Thảo).
    // Offer every whole-word match so a short name never selects the wrong recipient.
    const rest=recipients.filter(p=>(' '+foldedName(p.name)+' ').includes(' '+exact+' ') || (' '+foldedName(p.short)+' ').includes(' '+exact+' '));
    return rest;
  }
  function setRecipient(selected){
    person=selected;
    $('#nameError').textContent='';
    $('#nameInput').removeAttribute('aria-invalid');
    $('#nameChoices').replaceChildren();$('#nameChoices').hidden=true;
    $('#giftName').textContent=person.short;
    $('#envelopeName').textContent=person.short;
    $('#envelopePaperName').textContent=person.short;
    go('flower');
  }
  function showRecipientChoices(matches){
    const box=$('#nameChoices');box.replaceChildren();
    const info=document.createElement('p');info.className='name-match-tip';
    info.textContent='Có hơn một người trùng tên. Bạn chọn đúng tên mình nhé:';
    box.append(info);
    matches.forEach(p=>{
      const b=document.createElement('button');b.type='button';b.className='recipient-option';
      b.textContent=p.name;b.addEventListener('click',()=>setRecipient(p));box.append(b);
    });
    box.hidden=false;
    $('#nameError').textContent='';
    $('#nameInput').removeAttribute('aria-invalid');
  }
  function burst(x,y,n=12){
    if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const fragment=document.createDocumentFragment(),pieces=[];
    for(let i=0;i<n;i++){
      const el=document.createElement('span'),angle=Math.PI*2*i/n,dist=40+Math.random()*95;
      el.className='confetti';el.textContent=i%3?'✦':'♥';
      el.style.cssText=`--px:${x}px;--py:${y}px;--dx:${Math.cos(angle)*dist}px;--dy:${Math.sin(angle)*dist}px;--size:${12+Math.random()*13}px`;
      fragment.append(el);pieces.push(el);
    }
    document.body.append(fragment);
    setTimeout(()=>pieces.forEach(el=>el.remove()),950);
  }
  function shuffleWishes(){
    const deck=[...wishes];
    for(let i=deck.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [deck[i],deck[j]]=[deck[j],deck[i]];
    }
    return deck;
  }
  const wishDialog=$('#wishDialog');
  function showWishQuote(message){
    $('#wishDialogCount').textContent=`LỜI CHÚC ${caught} / 5`;
    $('#wishDialogText').textContent='“'+message+'”';
    $('#wishDialogClose').textContent=caught===5?'Tuyệt! Nhận đủ 5 lời chúc ✓':'Cất lời chúc, chọn tiếp →';
    app.classList.add('dialog-open');
    wishDialog.showModal();
  }
  wishDialog.addEventListener('close',()=>app.classList.remove('dialog-open'));
  $('#wishDialogClose').addEventListener('click',()=>wishDialog.close());
   const logo=$('.brand-logo');
   // The official company logo is an image asset, not generated text.
   // If the image is unavailable, do not substitute a hard-coded imitation.
   logo.addEventListener('error',()=>{logo.hidden=true});
   if(logo.complete&&!logo.naturalWidth)logo.hidden=true;
  const themeMeta=$('meta[name="theme-color"]');
  const fixedLilyImage=$('#letterFlowerPhoto').getAttribute('src');
  function applyFlower(key){
    flower=flowers[key];
    if(!flower)return;
    app.dataset.flower=key;
    for(const [css,value] of Object.entries({'--flower-accent':flower.accent,'--flower-dark':flower.dark,'--flower-pale':flower.pale,'--flower-haze':flower.haze,'--flower-image':`url("${flower.image}")`}))app.style.setProperty(css,value);
    themeMeta.content=flower.pale;
    $('#gardenFlowerName').textContent='vườn thức dậy!';
    $('#gardenLead').textContent='Chạm một lần, đợi những đóa hoa mở cánh và nắng nhẹ ghé qua nhé.';
    const photo=$('#letterFlowerPhoto');photo.src=fixedLilyImage;photo.alt='Minh họa hoa lily hồng vẽ màu nước';photo.style.objectPosition='center';
    $('#garden').setAttribute('aria-label','Chạm vào khu vườn để cây mọc, bướm bay và nắng tỏa');
    $('#letterFlowerName').textContent='Lily';
  }
  function clearFlower(){
    flower=null;delete app.dataset.flower;
    for(const name of ['--flower-accent','--flower-dark','--flower-pale','--flower-haze','--flower-image'])app.style.removeProperty(name);
    themeMeta.content='#f8e7eb';
  }
  function scheduleGarden(fn,delay){gardenTimers.push(setTimeout(fn,delay))}
  function go(next){step=next;app.dataset.step=next;app.classList.toggle('garden-mode',next==='garden');app.classList.toggle('letter-mode',next==='letter'||next==='envelope');scenes.forEach(s=>{const active=s.id==='scene-'+next;s.classList.toggle('active',active);s.setAttribute('aria-hidden',String(!active))});const order=['flower','gift','beat','catch','wish','garden','envelope','letter'],idx=order.indexOf(next);progress.forEach((p,i)=>{p.className=i===Math.min(idx,5)?'current':i<idx?'done':''});window.scrollTo({top:0,behavior:'instant'});const h=$('#scene-'+next+' h1,#scene-'+next+' h2');if(h)h.setAttribute('tabindex','-1'),h.focus({preventScroll:true});}
  $('#nameForm').addEventListener('submit',e=>{
    e.preventDefault();
    const found=findRecipients($('#nameInput').value);
    if(found.length===1){setRecipient(found[0]);return}
    if(found.length>1){showRecipientChoices(found);return}
    $('#nameChoices').replaceChildren();$('#nameChoices').hidden=true;
    $('#nameError').textContent='Chưa tìm thấy tên này. Bạn thử tên riêng hoặc họ tên đầy đủ nhé.';
    $('#nameInput').setAttribute('aria-invalid','true');
    $('#nameCard').classList.remove('shake');void $('#nameCard').offsetWidth;
    $('#nameCard').classList.add('shake');$('#nameInput').focus();
  });
  $('#nameInput').addEventListener('input',()=>{$('#nameError').textContent='';$('#nameInput').removeAttribute('aria-invalid');$('#nameChoices').hidden=true;$('#nameChoices').replaceChildren()});
  $$('.flower-card').forEach(card=>card.addEventListener('click',()=>{applyFlower(card.dataset.flower);go('gift')}));
  $('#openGift').addEventListener('click',e=>{burst(e.clientX,e.clientY,18);go('beat')});
  const hold=$('#holdHeart');
  function stopHold(){
    holding=false;cancelAnimationFrame(holdFrame);hold.classList.remove('pressed');
    if(!holdCompleted){hold.style.setProperty('--fill-level','0%');if(step==='beat')$('#holdStatus').textContent='Đặt ngón tay lên hình trái tim và giữ đến khi đầy màu.'}
  }
  function completeHold(){
    if(step!=='beat'||holdCompleted)return;
    holdCompleted=true;holding=false;cancelAnimationFrame(holdFrame);hold.classList.remove('pressed');
    hold.style.setProperty('--fill-level','100%');
    $('#holdStatus').textContent='Trái tim đã đầy màu hồng!';
    const r=hold.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2,24);
    setTimeout(()=>{if(step==='beat')go('catch');holdCompleted=false;hold.style.setProperty('--fill-level','0%')},450);
  }
  function tickHold(t){
    if(!holding)return;
    const v=Math.min((t-holdStart)/1800,1);
    hold.style.setProperty('--fill-level',Math.round(v*100)+'%');
    if(v>=1)completeHold();else holdFrame=requestAnimationFrame(tickHold);
  }
  function startHold(){
    if(step!=='beat'||holdCompleted)return;
    holding=true;holdStart=performance.now();hold.classList.add('pressed');
    $('#holdStatus').textContent='Màu hồng đang dâng lên...';
    holdFrame=requestAnimationFrame(tickHold);
  }
  hold.addEventListener('pointerdown',e=>{e.preventDefault();hold.setPointerCapture(e.pointerId);startHold()});
  hold.addEventListener('pointerup',stopHold);hold.addEventListener('pointercancel',stopHold);hold.addEventListener('lostpointercapture',stopHold);
  hold.addEventListener('keydown',e=>{if((e.key===' '||e.key==='Enter')&&!holding){e.preventDefault();startHold()}});
  hold.addEventListener('keyup',e=>{if(e.key===' '||e.key==='Enter')stopHold()});
  $('#holdAlternative').addEventListener('click',completeHold);
  $$('.floating-heart').forEach((b,i)=>b.addEventListener('click',()=>{if(b.classList.contains('collected')||caught>=5)return;b.classList.add('collected');caught++;$('#gameCount').textContent=`Đã gom ${caught} / 5`;if(!wishesDeck.length)wishesDeck=[person.heartWish,...shuffleWishes()];const found=wishesDeck[caught-1];collectedWishes.push(found);showWishQuote(found);if(caught===5)$('#catchNext').hidden=false}));$('#catchNext').addEventListener('click',()=>go('wish'));
  $$('.choice').forEach(b=>b.addEventListener('click',e=>{wish=b.dataset.wish;b.classList.add('selected');burst(e.clientX||innerWidth/2,e.clientY||innerHeight/2,15);setTimeout(()=>go('garden'),360)}));
   function gardenStatus(message){$('#growthCounter').textContent=message}
   function finishGarden(){
     const garden=$('#garden');
     garden.classList.add('phase-grow','phase-butterflies','phase-sunshine','is-finished');
     garden.classList.remove('is-playing');garden.dataset.growth='4';garden.removeAttribute('aria-busy');growth=4;
     gardenStatus('Khu vườn đã nở rộ dành cho bạn!');
     garden.setAttribute('aria-label','Chạm để xem lại khu vườn nở hoa');
     $('#gardenNext').classList.add('visible');$('#gardenReplay').hidden=false;
     $('#gardenMessage').classList.add('visible');$('#gardenMessage').setAttribute('aria-hidden','false');
   }
   function startGarden(){
     if(step!=='garden'||growth>0)return;
     const garden=$('#garden');growth=1;garden.dataset.growth='1';
     garden.classList.add('is-playing','phase-grow');
     garden.setAttribute('aria-busy','true');
     gardenStatus('Những mầm cây đang lớn lên...');
     if(matchMedia('(prefers-reduced-motion: reduce)').matches){finishGarden();return}
     scheduleGarden(()=>{growth=2;garden.dataset.growth='2';garden.classList.add('phase-butterflies');gardenStatus('Bướm đang bay qua khu vườn...');},1250);
     scheduleGarden(()=>{growth=3;garden.dataset.growth='3';garden.classList.add('phase-sunshine');gardenStatus('Nắng ấm đang tỏa ra...');},2450);
     scheduleGarden(()=>{finishGarden();},3700);
   }
   function resetGardenVisual(){
     gardenTimers.forEach(clearTimeout);gardenTimers=[];
     const garden=$('#garden');
     garden.classList.add('no-motion');
     garden.classList.remove('phase-grow','phase-butterflies','phase-sunshine','is-playing','is-finished');
     garden.dataset.growth='0';garden.removeAttribute('aria-busy');growth=0;
     garden.setAttribute('aria-label','Chạm vào khu vườn để cây mọc, bướm bay và nắng tỏa');
     gardenStatus('Chạm để khu vườn thức dậy ✨');
     $('#gardenMessage').classList.remove('visible');$('#gardenMessage').setAttribute('aria-hidden','true');
     $('#gardenNext').classList.remove('visible');$('#gardenReplay').hidden=true;
     void garden.offsetWidth;
     requestAnimationFrame(()=>{garden.classList.remove('no-motion')});
   }
   function activateGarden(){if(step!=='garden'||(growth>0&&growth<4))return;if(growth===4){resetGardenVisual();scheduleGarden(startGarden,90)}else startGarden()}
   $('#garden').addEventListener('click',activateGarden);
   $('#garden').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();activateGarden()}});
   $('#gardenReplay').addEventListener('click',()=>{resetGardenVisual();scheduleGarden(startGarden,90)});
   $('#gardenNext').addEventListener('click',()=>go('envelope'));
  function revealLetter(){
    if(!person||!flower)return;
    $('#letterName').textContent=person.short;
    $('#letterSalutation').textContent=person.salutation;
    $('#letterBody').textContent=person.body;
    $('#letterWish').textContent=wishText[wish]||'';
    $('#letterFlowerName').textContent='Lily';
    $('#collectedWishes').replaceChildren(...collectedWishes.map(message=>{const li=document.createElement('li');li.textContent=message;return li}));
    go('letter');burst(innerWidth/2,innerHeight*.35,28);
  }
  $('#openEnvelope').addEventListener('click',revealLetter);
  $('#secretHeart').addEventListener('click',e=>{
    $('#secretMessage').classList.add('visible');
    e.currentTarget.setAttribute('aria-expanded','true');
    e.currentTarget.textContent='♥ Đã mở lời nhắn bí mật';
    burst(e.clientX||innerWidth/2,e.clientY||innerHeight/2,14);
  });
  function reset(keepPerson=false,chooseFlower=false){
    wish=null;caught=0;growth=0;holdCompleted=false;stopHold();
    if(wishDialog.open)wishDialog.close();
    wishesDeck=[];collectedWishes=[];resetGardenVisual();
    $('#holdStatus').textContent='Đặt ngón tay lên hình trái tim và giữ đến khi đầy màu.';
    $('#gameCount').textContent='Đã gom 0 / 5';$('#catchNext').hidden=true;
    $$('.floating-heart').forEach(b=>b.classList.remove('collected'));
    $$('.choice').forEach(b=>b.classList.remove('selected'));
    $('#secretMessage').classList.remove('visible');
    $('#secretHeart').setAttribute('aria-expanded','false');
    $('#secretHeart').textContent='♥ Mở lời nhắn bí mật';
    $('#saveHelp').textContent='Trên điện thoại, chọn “Lưu hình ảnh” trong menu chia sẻ; nếu không hỗ trợ, thiệp PNG sẽ được tải xuống.';
    if(chooseFlower&&person){clearFlower();go('flower')}
    else if(keepPerson&&person&&flower)go('gift');
    else{person=null;clearFlower();$('#nameInput').value='';$('#nameChoices').hidden=true;$('#nameChoices').replaceChildren();go('gate');$('#nameInput').focus()}
  }
  $('#replay').addEventListener('click',()=>reset(true));
  $('#homeLink').addEventListener('click',e=>{e.preventDefault();reset(false)});
  function wrap(ctx,str,maxWidth){
    const words=str.split(' '),lines=[];let line='';
    for(const word of words){const trial=line?line+' '+word:word;if(ctx.measureText(trial).width>maxWidth&&line){lines.push(line);line=word}else line=trial}
    if(line)lines.push(line);return lines;
  }
  const cardFont = '"Mali", "Segoe UI", Arial, sans-serif';
  function makeCard(){
    const c=document.createElement('canvas');c.width=1200;
    const x=c.getContext('2d');
    const paragraphs=[person.body,wishText[wish]||'','Mong những ngày bình thường của bạn cũng đầy ắp sự quan tâm, bình yên và tiếng cười.'].filter(Boolean);
    x.font='29px '+cardFont;
    const bodyLines=paragraphs.map(p=>wrap(x,p,930));
    x.font='25px '+cardFont;
    const wishLines=collectedWishes.map(p=>wrap(x,p,895));
    // Measure text first, then size the canvas to the *actual* bottom of the artwork.
    // Fixed minimum heights previously left a large empty panel below the lily image.
    const bodyHeight=bodyLines.reduce((sum,lines)=>sum+lines.length*47+30,0);
    const wishesHeight=wishLines.reduce((sum,lines)=>sum+lines.length*38+20,0);
    const signatureY=315+bodyHeight+10+63+54+wishesHeight+33;
    const frameY=signatureY+48;
    const frameHeight=390;
    const footerY=frameY+frameHeight+48;
    c.height=Math.ceil(footerY+72);
    x.fillStyle=flower.pale;x.fillRect(0,0,c.width,c.height);
    x.fillStyle='#fffdfd';x.fillRect(45,45,c.width-90,c.height-90);
    x.strokeStyle=flower.accent;x.globalAlpha=.42;x.lineWidth=2;x.strokeRect(60,60,c.width-120,c.height-120);x.globalAlpha=1;
    x.textAlign='center';x.fillStyle=flower.dark;x.font='bold 25px Arial';x.fillText('EONSR · 20.10.2026',600,142);
    x.textAlign='left';x.fillStyle='#372832';x.font='600 57px '+cardFont;x.fillText('Gửi '+person.short+',',132,247);
    let y=315;x.font='29px '+cardFont;
    for(const lines of bodyLines){for(const line of lines){x.fillText(line,132,y);y+=47}y+=30}
    y+=10;x.strokeStyle=flower.accent;x.globalAlpha=.35;x.beginPath();x.moveTo(132,y);x.lineTo(1068,y);x.stroke();x.globalAlpha=1;y+=63;
    x.fillStyle=flower.dark;x.font='600 39px '+cardFont;x.fillText('5 lời chúc bạn đã nhận',132,y);y+=54;
    x.fillStyle='#4e3d46';x.font='25px '+cardFont;
    wishLines.forEach((lines,i)=>{x.fillStyle=flower.accent;x.fillText(String(i+1).padStart(2,'0'),132,y);x.fillStyle='#4e3d46';for(const line of lines){x.fillText(line,184,y);y+=38}y+=20});
    y+=33;x.fillStyle=flower.dark;x.font='600 37px '+cardFont;x.textAlign='right';x.fillText('Tập thể anh em EONSR',1060,y);
    const photo=$('#letterFlowerPhoto');
    x.fillStyle=flower.pale;x.fillRect(365,frameY,470,frameHeight);
    if(photo.complete&&photo.naturalWidth){
      const scale=Math.min(444/photo.naturalWidth,315/photo.naturalHeight);
      const width=photo.naturalWidth*scale,height=photo.naturalHeight*scale;
      x.drawImage(photo,600-width/2,frameY+13+(315-height)/2,width,height);
    }
    x.textAlign='center';x.fillStyle=flower.dark;x.font='600 25px '+cardFont;x.fillText('Đóa lily dành riêng cho bạn',600,frameY+359);
    x.textAlign='center';x.font='20px Arial';x.fillText('Một chút thương, gửi đến bạn',600,footerY);
    return c;
  }
  function downloadCard(file){
    const url=URL.createObjectURL(file),a=document.createElement('a');
    a.href=url;a.download=file.name;document.body.append(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),30000);
    $('#saveHelp').textContent='Ảnh PNG đã được tải xuống. Mở mục Tệp tải về trên thiết bị để xem.';
  }
  $('#saveCard').addEventListener('click',async()=>{
    if(!person||!flower)return;
    try{
      await Promise.race([Promise.all([document.fonts.load('400 29px Mali','Tiếng Việt có dấu: Trường, Thùy, Diệu, Trâm'),document.fonts.load('600 39px Mali','Nguyễn Thị Huyền Diệu')]),new Promise(resolve=>setTimeout(resolve,2300))]);
      const c=makeCard();
      const blob=await new Promise((resolve,reject)=>c.toBlob(b=>b?resolve(b):reject(new Error('Cannot generate PNG')),'image/png'));
      const filename='thiep-20-10-'+person.name.toLocaleLowerCase('vi-VN').replace(/\s+/g,'-')+'.png';
      const file=new File([blob],filename,{type:'image/png'});
      const onPhone=matchMedia('(pointer:coarse)').matches&&innerWidth<900;
      if(onPhone&&navigator.share&&navigator.canShare?.({files:[file]})){
        try{await navigator.share({files:[file],title:'Thiệp 20/10 dành cho '+person.short});$('#saveHelp').textContent='Ảnh đã được gửi tới lựa chọn của bạn trong menu chia sẻ.'}
        catch(error){if(error.name!=='AbortError')downloadCard(file)}
      }else downloadCard(file);
    }catch(error){$('#saveHelp').textContent='Chưa tạo được ảnh thiệp. Vui lòng thử lại.';console.error('Card export failed',error)}
  });
  scenes.forEach(s=>s.setAttribute('aria-hidden',String(!s.classList.contains('active'))));
  // Defer Google Font loading: even offline/restricted networks must not block the greeting flow.
  setTimeout(()=>{
    const link=document.createElement('link');
    link.rel='stylesheet';
    link.href='https://fonts.googleapis.com/css2?family=Mali:wght@400;500;600;700&display=swap&subset=latin,vietnamese';
    document.head.append(link);
  },0);
})();
}

const KPF = (function(){
  document.body.addEventListener('keydown',e=>{
      const ek = e.key; // ek는 눌러진 키
      const pkpf = kpfs.filter(v=>v.key===ek); // 눌러진 키와 동일한 kpf
      pkpf.forEach(v=>v.pressed=true);
  });
  document.body.addEventListener('keyup',e=>{
      const ek = e.key; // ek는 떼진 키
      const pkpf = kpfs.filter(v=>v.key===ek); // 떼진 키와 동일한 kpf
      pkpf.forEach(v=>v.pressed=false);
  });
  const kpfs = [];
  return ( 
      class KPF {
          constructor(key) {
              this.key = key;
              this.pressed = false;
              kpfs.push(this);
          }
          bind(keyName) {
              this.key = keyName;
          }
          test() {
              return this.pressed;
          }
      }
  )
})();

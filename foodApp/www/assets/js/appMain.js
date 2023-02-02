  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js"
  import { getDatabase, ref, onValue }  from  "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  const firebaseConfig = {
    apiKey: "AIzaSyBwtWOyTvSKPFtSRnRpE11OrUvX3bh5y8U",
    authDomain: "deliveryapp-ca6c5.firebaseapp.com",
    databaseURL: "https://deliveryapp-ca6c5-default-rtdb.firebaseio.com",
    projectId: "deliveryapp-ca6c5",
    storageBucket: "deliveryapp-ca6c5.appspot.com",
    messagingSenderId: "478233782508",
    appId: "1:478233782508:web:ed7c52894a7ba9922c5dc9",
    measurementId: "G-K2TXB7V7BJ"
  };
   const app = initializeApp(firebaseConfig) 



  //lee datos de empresa
const db = getDatabase(app);

const empcount = ref(db, 'main_home' )
onValue(empcount, (snapshot) => {
  var empCountval = snapshot.val()
  })

  for (let i = 0; i < empCountval.length ; i++) {

const empname = ref(db, 'main_home/' + i  + '/' + '/nombre');
onValue(empname, (snapshot) => {
  const empName = snapshot.val();
  const empname = document.querySelector('#empName');
  empname.innerHTML = empName;
  
  const empid = ref(db, 'main_home/' + i  + '/' + '/id');
  onValue(empid, (snapshot) => {
      const empId = snapshot.val();
      const linkHref = document.querySelector('#linkHref')
      linkHref.setAttribute("href", "single-"+empId+".html");
      empname.setAttribute("href", "single-"+empId+".html");

    const ratingref = ref(db, 'main_home/' + i  + '/' + '/rating');
    onValue(ratingref, (snapshot) => {
      const emprating = snapshot.val();
      const empRating = document.querySelector('#empRating');
      empRating.innerHTML = emprating;
      
      const empaddress = ref(db, 'main_home/' + i  + '/' + '/address');
      onValue(empaddress, (snapshot) => {
        const empaddress = snapshot.val();
        const empAddress = document.querySelector('#empAddress');
        empAddress.innerHTML = empaddress;

        const empstatus = ref(db, 'main_home/' + i  + '/' + '/status');
        onValue(empstatus, (snapshot) => {
          const empstatus = snapshot.val();
          const empStatus = document.querySelector('#empStatus');
          if (empstatus == "close"){
            empStatus.setAttribute("style","color:red");
          }else{
            empStatus.setAttribute("style","color:green");

          }
          empStatus.innerHTML = empstatus;
    

         const empimg =  ref(db, 'main_home/' + i  + '/' + '/profile_picture');
         onValue(empimg, (snapshot) => {
           const data = snapshot.val();
           const empimg = document.querySelector('#empImg');
           empimg.setAttribute("src",data);    
  
 
  });
  });
  });
  });
  });


  const newcontent = elemntFromHtml(`
  <div class="item">
  <div class="single-product-wrap">
      <div class="thumb">
          <span class="tag">15% Off</span>
          <a id="linkHref" href="single-restuarent.html">
              <img  id="empImg" src="" alt="img">
          </a>
          <a class="fav-btn" href="#"><i class="fa fa-heart"></i></a>
      </div>
      <div class="details">
          <h6><a id="empName" href="single-restuarent.html"></a> <span id="empStatus" style="color:red" ></span></h6>
          <div class="ratting">
              <i id="empRating" class="ri-star-fill ps-0"></i>
              <span id="empRatingPeopleCount" >(6k)</span>
              <span id="empAddress" >Av.Sarazora 102</span>
          </div>
          <span>20-25 Min <span class="ms-3">Free Delivery</span></span>
      </div>
  </div>
  </div>
  `)

});
   } 
  function elemntFromHtml(html){
    const template = document.createElement("template");   
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
  }
const parentDiv = document.getElementById("div1").parentNode;   
const vp2 = document.getElementById("div1");  
document.body.appendChild(newcontent)
parentDiv.insertBefore(newcontent, vp2)


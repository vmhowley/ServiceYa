  // Import the functions you need from the SDKs you need
  import { getDatabase, ref, onValue }  from  "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
    import { app } from "./firebase.js";



const db = getDatabase(app);
var empcount = ref(db, 'main_home' )
onValue(empcount, (snapshot) => {
var empCountval = snapshot.val()


var empCountlen = empCountval.length 


 // const parentDiv = document.getElementById("div0").parentNode
  //const vp2 = document.getElementById("div0");
 // document.body.appendChild(newcontent)
  for (let i = 0; i < empCountlen ; i++) {

    var newcontent = `
    <div class="item">
    <div class="single-product-wrap">
        <div class="thumb">
            <span class="tag">15% Off</span>
            <a id="linkHref" href="single-restuarent.html">
                <img  id="empImg`+i+`" src="" alt="img">
            </a>
            <a class="fav-btn" href="#"><i class="fa fa-heart"></i></a>
        </div>
        <div class="details">
            <h6><a id="empName`+i+`" href="single-restuarent.html"></a> <span id="empStatus" style="color:red" ></span></h6>
            <div class="ratting`+i+`">
                <i id="empRating`+i+`" class="ri-star-fill ps-0"></i>
                <span id="empRatingPeopleCount`+i+`" >(6k)</span>
                <span id="empAddress`+i+`" >Av.Sarazora 102</span>
            </div>
            <span>20-25 Min <span class="ms-3">Free Delivery</span></span>
        </div>
    </div>
    </div>
    `


//parentDiv.insertBefore(newcontent, vp2)
 document.getElementById("div0").innerHTML += newcontent;


const empname = ref(db, 'main_home/' + i  + '/' + '/nombre')
onValue(empname, (snapshot) => {
  const empName = snapshot.val()
  const empname = document.querySelector('#empName'+i)
  empname.innerHTML = empName
});

  const empid = ref(db, 'main_home/' + i  + '/' + '/id')
  onValue(empid, (snapshot) => {
      const empId = snapshot.val()
      const linkHref = document.querySelector('#linkHref'+i)
      const empname = document.querySelector('#empName'+i)

      linkHref.setAttribute("href", "single-"+empId+".html")
      empname.setAttribute("href", "single-"+empId+".html")
  });

    const ratingref = ref(db, 'main_home/' + i  + '/' + '/rating')
    onValue(ratingref, (snapshot) => {
      const emprating = snapshot.val()
      const empRating = document.querySelector('#empRating'+i)
      empRating.innerHTML = emprating
    });

      const empaddress = ref(db, 'main_home/' + i  + '/' + '/address')
      onValue(empaddress, (snapshot) => {
        const empaddress = snapshot.val()
        const empAddress = document.querySelector('#empAddress'+i)
        empAddress.innerHTML = empaddress
      });

        const empstatus = ref(db, 'main_home/' + i  + '/' + '/status')
        onValue(empstatus, (snapshot) => {
          const empstatus = snapshot.val()
          const empStatus = document.querySelector('#empStatus'+i)
          if (empstatus == "close"){
            empStatus.setAttribute("style","color:red")
          }else{
            empStatus.setAttribute("style","color:green")

          }
          empStatus.innerHTML = empstatus
        });


         const empimg =  ref(db, 'main_home/' + i  + '/' + '/profile_picture')
         onValue(empimg, (snapshot) => {
           const data = snapshot.val()
           const empimg = document.querySelector('#empImg'+i)
           empimg.setAttribute("src",data)   
  
          
          });
  
          

        }
      });

      
      
 


  // function elemntFromHtml(html){
  //   const template = document.createElement("template");   
  //   template.innerHTML = html.trim();
  //   return template.content.firstElementChild;

    
  // }

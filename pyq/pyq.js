let year = document.getElementById("year_select");
let branch = document.getElementById("branch_select");
let sub = document.getElementById("subject_select");


function load_pyq(year, branch) {

   if(year.value==""){
      alert("Select Year with given option");
      return;
   }

   if(branch.value==""){
      alert("Select branch with given option");
      return;
   }
     

   

   let first_section = document.getElementById('first_section');
   let second_section = document.getElementById('second_section');




   if (year.value == 'first_year') {

      first_section.innerHTML = `
      
   <div>
      <span>BT-101</span>
      <br>
      <span><b>Chemistry</b></span>
      <br><br>
      <a href="FirstYear/bt101/2020.pdf">2020</a> &nbsp; &nbsp;
      <a href="FirstYear/bt101/2019 nov.pdf">2019</a> &nbsp; &nbsp;
      <br><br>
      <a href="FirstYear/bt101/2019 june.pdf">2019</a> &nbsp; &nbsp;
      <a href="FirstYear/bt101/2018 nov.pdf">2018</a> &nbsp; &nbsp;
   </div>

  <div>
      <span>BT-102</span>
      <br>
      <span><b>Mathematics-I</b></span>
      <br><br>
      <a href="FirstYear/bt102/2020.pdf">2020</a> &nbsp; &nbsp;
      <a href="FirstYear/bt102/may-2019.pdf">2019</a> &nbsp; &nbsp;
      <br><br>
      <a href="FirstYear/bt102/nov-2018.pdf">2018</a> &nbsp; &nbsp;
      <a href="http://">2018</a> &nbsp; &nbsp;
  </div>

  <div>
      <span>BT-103</span>
      <br>
      <span><b>English</b></span>
      <br><br>
      <a href="FirstYear/bt103/2020.pdf">2020</a> &nbsp; &nbsp;
      <a href="FirstYear/bt103/nov-2019.pdf">2019</a> &nbsp; &nbsp;
      <br><br>
      <a href="FirstYear/bt103/2019.pdf">2019</a> &nbsp; &nbsp;
      <a href="FirstYear/bt103/2018.pdf">2018</a> &nbsp; &nbsp;
  </div>

  <div>
      <span>BT-104</span>
      <br>
      <span><b>BEEE</b></span>
      <br><br>
      <a href="FirstYear/bt104/june-2020.pdf">2020</a> &nbsp; &nbsp;
      <a href="FirstYear/bt104/may-2019.pdf">2019</a> &nbsp; &nbsp;
      <br><br>
      <a href="FirstYear/bt104/nov-2019.pdf">2019</a> &nbsp; &nbsp;
      <a href="FirstYear/bt104/nov-2018.pdf">2018</a>
  </div>

  <div>
      <span>BT-105</span>
      <br>
      <span><b>ED</b></span>
      <br><br>
      <a href="FirstYear/bt105/june-2020.pdf">2020</a> &nbsp; &nbsp;
      <a href="FirstYear/bt105/may-2019.pdf">2019</a> &nbsp; &nbsp;
      <br><br>
      <a href="FirstYear/bt105/may-2019.pdf">2019</a> &nbsp; &nbsp;
      <a href="FirstYear/bt105/nov-2018.pdf">2018</a>
  </div>

        `
    second_section.innerHTML = `

    <div>
        <span>BT-201</span>
        <br>
        <span><b>Physics</b></span>
        <br><br>
        <a href="FirstYear/bt201/2020.pdf">2020</a> &nbsp; &nbsp;
        <a href="FirstYear/bt201/may-2019.pdf">2019</a> &nbsp; &nbsp;
        <br><br>
        <a href="FirstYear/bt201/nov-2019.pdf">2019</a> &nbsp; &nbsp;
        <a href="FirstYear/bt201/nov-2018.pdf">2018</a>
    </div>

    <div>
        <span>BT-202</span>
        <br>
        <span><b>Mathematics-II</b></span>
        <br><br>
        <a href="FirstYear/bt202/2020.pdf">2020</a> &nbsp; &nbsp;
        <a href="FirstYear/bt202/may-2019.pdf">2019</a> &nbsp; &nbsp;
        <br><br>
        <a href="FirstYear/bt202/nov-2019.pdf">2019</a> &nbsp; &nbsp;
        <a href="http://">2018</a>
    </div>

    <div>
        <span>BT-203</span>
        <br>
        <span><b>BME</b></span>
        <br><br>
        <a href="FirstYear/bt203/jun-2020.pdf">2020</a> &nbsp; &nbsp;
        <a href="FirstYear/bt203/may-2019.pdf">2019</a> &nbsp; &nbsp;
        <br><br>
        <a href="FirstYear/bt203/nov-2019.pdf">2019</a> &nbsp; &nbsp;
        <a href="FirstYear/bt203/nov-2018.pdf">2018</a>
    </div>

    <div>
        <span>BT-204</span>
        <br>
        <span><b>Basic Civil Engg.</b></span>
        <br><br>
        <a href="FirstYear/bt204/jun-2020.pdf">2020</a> &nbsp; &nbsp;
        <a href="FirstYear/bt204/nov-2019.pdf">2019</a> &nbsp; &nbsp;
        <br><br>
        <a href="FirstYear/bt203/may-2019.pdf">2019</a> &nbsp; &nbsp;
        <a href="FirstYear/bt204/nov-2018.pdf">2018</a>
    </div>

    <div>
        <span>BT-205</span>
        <br>
        <span><b>Basic Computer Engg</b></span>
        <br><br>
        <a href="FirstYear/bt205/2020.pdf">2020</a> &nbsp; &nbsp;
        <a href="FirstYear/bt205/may-2019.pdf">2019</a> &nbsp; &nbsp;
        <br><br>
        <a href="FirstYear/bt205/nov-2019.pdf">2019</a> &nbsp; &nbsp;
        <a href="FirstYear/bt205/nov-2018.pdf">2018</a>
    </div>
`
   } else if (year.value == 'second_year') {

      if (branch.value == 'ec') {
         // console.log(first_section.innerHTML);

         first_section.innerHTML = `
         <div>
             <span>EC-301</span>
             <br>
             <span><b>Mathematics-III</b></span>
             <br><br>
             <a href="http://">2020</a> &nbsp;  &nbsp;
             <a href="http://">2019</a> &nbsp;  &nbsp;
             <br><br>
             <a href="http://">2019</a> &nbsp;  &nbsp;
             <a href="http://">2018</a>
             
         </div>


         <div>
           <span>EC-302</span>
           <br>
           <span><b>EMI</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
          
         </div>

       <div>
           <span>EC-303</span>
           <br>
           <span><b>Digital System Design</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
       </div>

       <div>
           <span>EC 304</span>
           <br>
           <span><b>Electronic Devices</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
      </div>

      <div>
           <span>EC-305</span>
           <br>
           <span><b>Network Analysis</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
      </div>`


         second_section.innerHTML = `
      <div>
         <span>EC-401</span>
         <br>
         <span><b>Energy & Environmental Engg.</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>


      <div>
         <span>EC-402</span>
         <br>
         <span><b>Signal & System</b></span>
         <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
      </div>

      <div>
         <span>EC-403</span>
         <br>
         <span><b>Analog Communication</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>

      <div>
         <span>EC-404</span>
         <br>
         <span><b>Control System</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>

      <div>
         <span>EC-405</span>
         <br>
         <span><b>Analog Circuit</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>  `



      } else if (branch.value == 'it') {

         first_section.innerHTML = `
         <div>
             <span>IT-301</span>
             <br>
             <span><b>Energy & Environmental Engg.</b></span>
             <br><br>
             <a href="http://">2020</a> &nbsp;  &nbsp;
             <a href="http://">2019</a>
             <br><br>
             <a href="http://">2019</a>&nbsp;  &nbsp;
             <a href="http://">2018</a> 
         </div>


         <div>
           <span>IT-302</span>
           <br>
           <span><b>Discrete Structure</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
         </div>

       <div>
           <span>IT-303</span>
           <br>
           <span><b>Data Structure</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
       </div>

       <div>
           <span>IT 304</span>
           <br>
           <span><b>Digital Circuits & System</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
      </div>

      <div>
           <span>IT-305</span>
           <br>
           <span><b>Object Oriented Programming</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
      </div>`


         second_section.innerHTML = `
      <div>
         <span>IT-401</span>
         <br>
         <span><b>Energy & Environmental Engg.</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>


      <div>
         <span>IT-402</span>
         <br>
         <span><b>Computer Architecture</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>

      <div>
         <span>IT-403</span>
         <br>
         <span><b>Analysis Design of Algorithm</b></span>
         <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
      </div>

      <div>
         <span>IT-404</span>
         <br>
         <span><b>Analog & Digital Comm.</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>

      <div>
         <span>IT-405</span>
         <br>
         <span><b>DBMS</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>  `



      } else if (branch.value == 'cs') {

         first_section.innerHTML = `
         <div>
             <span>CS-301</span>
             <br>
             <span><b>Energy & Environmental Engg.</b></span>
             <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
         </div>


         <div>
           <span>CS-302</span>
           <br>
           <span><b>Discrete Structure</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
         </div>

       <div>
           <span>CS-303</span>
           <br>
           <span><b>Data Structure</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
       </div>

       <div>
           <span>CS-304</span>
           <br>
           <span><b>Digital System</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
      </div>

      <div>
           <span>CS-305</span>
           <br>
           <span><b>Oriented Programming and Methodology</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
      </div>`


         second_section.innerHTML = `
      <div>
         <span>CS-401</span>
         <br>
         <span><b>Mathematics-III</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>


      <div>
         <span>CS-402</span>
         <br>
         <span><b>Analysis Design of Algorithm</b></span>
         <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
      </div>

      <div>
         <span>CS-403</span>
         <br>
         <span><b>Software Engg.</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>

      <div>
         <span>CS-404</span>
         <br>
         <span><b>Computer org. & Architecture</b></span>
         <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
      </div>

      <div>
         <span>CS-405</span>
         <br>
         <span><b> Operating System</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>  `

      } else if (branch.value == 'ee') {

         first_section.innerHTML = `
         <div>
             <span>EE-301</span>
             <br>
             <span><b>Energy & Environmental Engg.</b></span>
             <br><br>
             <a href="http://">2020</a> &nbsp;  &nbsp;
             <a href="http://">2019</a>
             <br><br>
             <a href="http://">2019</a>&nbsp;  &nbsp;
             <a href="http://">2018</a> 
         </div>


         <div>
           <span>EE-302</span>
           <br>
           <span><b>Electromagnetic Field & Materials</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
         </div>

       <div>
           <span>EE-303</span>
           <br>
           <span><b>Electrical Measurements & Measuring Intruments</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
       </div>

       <div>
           <span>EE 304</span>
           <br>
           <span><b>Analog Electronics</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
      </div>

      <div>
           <span>EE-305</span>
           <br>
           <span><b>Network Analysis</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
      </div>`


         second_section.innerHTML = `
      <div>
         <span>EE-401</span>
         <br>
         <span><b>Mathematics-III</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>


      <div>
         <span>EE-402</span>
         <br>
         <span><b>Electrical Machine-I</b></span>
         <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
      </div>

      <div>
         <span>EE-403</span>
         <br>
         <span><b>Digital Electronics Logic Design</b></span>
         <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
      </div>

      <div>
         <span>EE-404</span>
         <br>
         <span><b>Power System-I</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>

      <div>
         <span>EE-405</span>
         <br>
         <span><b> Control System</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>  `

      } else if (branch.value == 'me') {

         first_section.innerHTML = `
         <div>
             <span>ME-301</span>
             <br>
             <span><b>Mathematics-III</b></span>
             <br><br>
             <a href="http://">2020</a> &nbsp;  &nbsp;
             <a href="http://">2019</a>
             <br><br>
             <a href="http://">2019</a>&nbsp;  &nbsp;
             <a href="http://">2018</a> 
         </div>


         <div>
           <span>ME-302</span>
           <br>
           <span><b>Thermodynamics</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
         </div>

       <div>
           <span>ME-303</span>
           <br>
           <span><b> Materials Technology</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
       </div>

       <div>
           <span>ME-304</span>
           <br>
           <span><b>Strength of Materials</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
      </div>

      <div>
           <span>ME-305</span>
           <br>
           <span><b>Manufacturing Process</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
      </div>`


         second_section.innerHTML = `
      <div>
         <span>ME-401</span>
         <br>
         <span><b>Energy & Environmental Engg.</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>


      <div>
         <span>ME-402</span>
         <br>
         <span><b>Intrumentation & Control</b></span>
         <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
      </div>

      <div>
         <span>ME-403</span>
         <br>
         <span><b>Theory of Machines</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>

      <div>
         <span>ME-404</span>
         <br>
         <span><b>Fluid Mechanics</b></span>
         <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
      </div>

      <div>
         <span>ME-405</span>
         <br>
         <span><b>Manufacturing Technology</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>  `

      } else {

         first_section.innerHTML = `
         <div>
             <span>CE-301</span>
             <br>
             <span><b>Mathematics-III</b></span>
             <br><br>
            <a href="http://">2020</a> &nbsp;  &nbsp;
            <a href="http://">2019</a>
            <br><br>
            <a href="http://">2019</a>&nbsp;  &nbsp;
            <a href="http://">2018</a> 
         </div>


         <div>
           <span>CE-302</span>
           <br>
           <span><b>Construction Materials</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
         </div>

       <div>
           <span>CE-303</span>
           <br>
           <span><b>Surveying</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
       </div>

       <div>
           <span>CE-304</span>
           <br>
           <span><b>Building Planning & Architecture</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
      </div>

      <div>
           <span>CE-305</span>
           <br>
           <span><b>Strength of Materials</b></span>
           <br><br>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
      </div>`


         second_section.innerHTML = `
      <div>
         <span>CE-401</span>
         <br>
         <span><b>Energy & Environmental Engg.</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>


      <div>
         <span>CE-402</span>
         <br>
         <span><b>Construction Technology</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>

      <div>
         <span>CE-403</span>
         <br>
         <span><b>Structural Analysis-I</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>

      <div>
         <span>CE-404</span>
         <br>
         <span><b>Transportation Engg.</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>

      <div>
         <span>CE-405</span>
         <br>
         <span><b>Engg. Geology & Remote Sensing</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>  `

      }

   } else if (year.value == 'third_year') {

      if (branch.value == 'ec') {
         // console.log(first_section.innerHTML);

         first_section.innerHTML = `
         <div>
             <span>EC-501</span>
             <br>
             <span><b>Microprocessor & its Apps.</b></span>
             <br><br>
             <a href="http://">2020</a> &nbsp;  &nbsp;
             <a href="http://">2019</a>
             <br><br>
             <a href="http://">2019</a>&nbsp;  &nbsp;
             <a href="http://">2018</a> 
         </div>


         <div>
           <span>EC-502</span>
           <br>
           <span><b>Digit Comm.</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
         </div>

         <div>
            <span>EC-503(A)</span>
            <br>
            <span><b>CNTL</b></span>
            <br><br>
            <a href="http://">2020</a> &nbsp;  &nbsp;
            <a href="http://">2019</a>
            <br><br>
            <a href="http://">2019</a>&nbsp;  &nbsp;
            <a href="http://">2018</a> 
         </div>

      
         <div>
         <span>EC-504(A)</span>
         <br>
         <span><b>Electromagnetic Theory</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
         </div>
      `


         second_section.innerHTML = `
        <div>
            <span>EC-601</span>
            <br>
            <span><b>Digital Signal Procss.</b></span>
            <br><br>
            <a href="http://">2020</a> &nbsp;  &nbsp;
            <a href="http://">2019</a>
            <br><br>
            <a href="http://">2019</a>&nbsp;  &nbsp;
            <a href="http://">2018</a> 
       </div>


       <div>
         <span>EC-602</span>
         <br>
         <span><b>Antenna & Wave Propagation</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>

      <div>
         <span>EC-603(A)</span>
         <br>
         <span><b>Data Comm.</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>

  
      <div>
      <span>EC-604(A)</span>
      <br>
      <span><b>Microcontroller & Embedded System</b></span>
      <br><br>
      <a href="http://">2020</a> &nbsp;  &nbsp;
      <a href="http://">2019</a>
      <br><br>
      <a href="http://">2019</a>&nbsp;  &nbsp;
      <a href="http://">2018</a> 
      </div>  `



      } else if (branch.value == 'it') {

         first_section.innerHTML = `
         <div>
             <span>IT-501</span>
             <br>
             <span><b>Operating System</b></span>
             <br><br>
             <a href="http://">2020</a> &nbsp;  &nbsp;
             <a href="http://">2019</a>
             <br><br>
             <a href="http://">2019</a>&nbsp;  &nbsp;
             <a href="http://">2018</a> 
         </div>


         <div>
           <span>IT-502</span>
           <br>
           <span><b>Computer Network</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
         </div>

       <div>
           <span>IT-503(A)</span>
           <br>
           <span><b>Theory of Computation</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
       </div>

      
      <div>
      <span>IT-504(C)</span>
      <br>
      <span><b>Java Programming</b></span>
      <br><br>
      <a href="http://">2020</a> &nbsp;  &nbsp;
      <a href="http://">2019</a>
      <br><br>
      <a href="http://">2019</a>&nbsp;  &nbsp;
      <a href="http://">2018</a> 
      </div>
      `


         second_section.innerHTML = `
        <div>
            <span>IT-601</span>
            <br>
            <span><b>Computer Grpahics & Multmedian (ACA)</b></span>
            <br><br>
            <a href="http://">2020</a> &nbsp;  &nbsp;
            <a href="http://">2019</a>
            <br><br>
            <a href="http://">2019</a>&nbsp;  &nbsp;
            <a href="http://">2018</a> 
       </div>


       <div>
         <span>IT-602</span>
         <br>
         <span><b>Wireless & Mobile Computing</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>

      <div>
         <span>IT-603(A)</span>
         <br>
         <span><b> Compiler Design</b></span>
         <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
      </div>

  
      <div>
      <span>IT-604(B)</span>
      <br>
      <span><b>Software Engg.</b></span>
      <br><br>
      <a href="http://">2020</a> &nbsp;  &nbsp;
      <a href="http://">2019</a>
      <br><br>
      <a href="http://">2019</a>&nbsp;  &nbsp;
      <a href="http://">2018</a> 
      </div>  `



      } else if (branch.value == 'cs') {

         first_section.innerHTML = `
         <div>
             <span>CS-501</span>
             <br>
             <span><b>Operating System</b></span>
             <br><br>
             <a href="http://">2020</a> &nbsp;  &nbsp;
             <a href="http://">2019</a>
             <br><br>
             <a href="http://">2019</a>&nbsp;  &nbsp;
             <a href="http://">2018</a> 
         </div>


         <div>
           <span>CS-502</span>
           <br>
           <span><b>Computer Network</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
         </div>

       <div>
           <span>CS-503(A)</span>
           <br>
           <span><b>Theory of Computation</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
       </div>

      
       <div>
            <span>CS-504(C)</span>
            <br>
            <span><b>Java Programming</b></span>
            <br><br>
            <a href="http://">2020</a> &nbsp;  &nbsp;
            <a href="http://">2019</a>
            <br><br>
            <a href="http://">2019</a>&nbsp;  &nbsp;
            <a href="http://">2018</a> 
       </div>
      `


         second_section.innerHTML = `
        <div>
            <span>CS-601</span>
            <br>
            <span><b>Computer Grpahics & Multmedian (ACA)</b></span>
            <br><br>
            <a href="http://">2020</a> &nbsp;  &nbsp;
            <a href="http://">2019</a>
            <br><br>
            <a href="http://">2019</a>&nbsp;  &nbsp;
            <a href="http://">2018</a> 
       </div>


       <div>
         <span>CS-602</span>
         <br>
         <span><b>Wireless & Mobile Computing</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>

      <div>
         <span>CS-603(A)</span>
         <br>
         <span><b>Compiler Design</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>

  
      <div>
      <span>CS-604(B)</span>
      <br>
      <span><b>Software Engg.</b></span>
      <br><br>
      <a href="http://">2020</a> &nbsp;  &nbsp;
      <a href="http://">2019</a>
      <br><br>
      <a href="http://">2019</a>&nbsp;  &nbsp;
      <a href="http://">2018</a> 
      </div>  `


      } else if (branch.value == 'ee') {

         first_section.innerHTML = `
         <div>
             <span>EE-501</span>
             <br>
             <span><b>Electrical Machine-II</b></span>
             <br><br>
             <a href="http://">2020</a> &nbsp;  &nbsp;
             <a href="http://">2019</a>
             <br><br>
             <a href="http://">2019</a>&nbsp;  &nbsp;
             <a href="http://">2018</a> 
         </div>


         <div>
           <span>EE-502</span>
           <br>
           <span><b>Power Electronics</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
         </div>

       <div>
           <span>EE-503(A)</span>
           <br>
           <span><b>Electrical Power Generation & Economy</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
       </div>

      
      <div>
         <span>EE-504(B)</span>
         <br>
         <span><b>Signal & System</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>
      `


         second_section.innerHTML = `
        <div>
            <span>EE-601</span>
            <br>
            <span><b>Electrical Machine Design</b></span>
            <br><br>
            <a href="http://">2020</a> &nbsp;  &nbsp;
            <a href="http://">2019</a>
            <br><br>
            <a href="http://">2019</a>&nbsp;  &nbsp;
            <a href="http://">2018</a> 
       </div>


       <div>
         <span>EE-602</span>
         <br>
         <span><b>Power System-II</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>

      <div>
         <span>EE-603(C)</span>
         <br>
         <span><b> Digital Signal Processing</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>

  
      <div>
      <span>EE-604(A)</span>
      <br>
      <span><b>Analog & Digital Comm.</b></span>
      <br><br>
      <a href="http://">2020</a> &nbsp;  &nbsp;
      <a href="http://">2019</a>
      <br><br>
      <a href="http://">2019</a>&nbsp;  &nbsp;
      <a href="http://">2018</a> 
      </div>  `

      } else if (branch.value == 'me') {

         first_section.innerHTML = `
         <div>
             <span>ME-501</span>
             <br>
             <span><b>Internal Combustion Engines</b></span>
             <br><br>
             <a href="http://">2020</a> &nbsp;  &nbsp;
             <a href="http://">2019</a>
             <br><br>
             <a href="http://">2019</a>&nbsp;  &nbsp;
             <a href="http://">2018</a> 
         </div>


         <div>
           <span>ME-502</span>
           <br>
           <span><b>Mechanical Vibrations</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
         </div>

       <div>
           <span>ME-503(A)</span>
           <br>
           <span><b>Mechatronics</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
       </div>

      
      <div>
      <span>ME-504(A)</span>
      <br>
      <span><b>Industrial Engg. Ergonomics</b></span>
      <br><br>
      <a href="http://">2020</a> &nbsp;  &nbsp;
      <a href="http://">2019</a>
      <br><br>
      <a href="http://">2019</a>&nbsp;  &nbsp;
      <a href="http://">2018</a> 
      </div>
      `


         second_section.innerHTML = `
        <div>
            <span>ME-601</span>
            <br>
            <span><b>Thermal Engg. & Gas Dynamics</b></span>
            <br><br>
            <a href="http://">2020</a> &nbsp;  &nbsp;
            <a href="http://">2019</a>
            <br><br>
            <a href="http://">2019</a>&nbsp;  &nbsp;
            <a href="http://">2018</a> 
       </div>


       <div>
         <span>ME-602</span>
         <br>
         <span><b>Machine Components & Design</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>

      <div>
         <span>ME-603(A)</span>
         <br>
         <span><b>(A) Turbomachinery</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>

  
      <div>
      <span>ME-604(c)</span>
      <br>
      <span><b>Renewable Energy Technology</b></span>
      <br><br>
      <a href="http://">2020</a> &nbsp;  &nbsp;
      <a href="http://">2019</a>
      <br><br>
      <a href="http://">2019</a>&nbsp;  &nbsp;
      <a href="http://">2018</a> 
      </div>  `


      } else {

         first_section.innerHTML = `
         <div>
             <span>CE-501</span>
             <br>
             <span><b>Fluids Mechanics-I</b></span>
             <br><br>
             <a href="http://">2020</a> &nbsp;  &nbsp;
             <a href="http://">2019</a>
             <br><br>
             <a href="http://">2019</a>&nbsp;  &nbsp;
             <a href="http://">2018</a> 
         </div>


         <div>
           <span>CE-502</span>
           <br>
           <span><b>Transportation Engg. II</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
         </div>

       <div>
           <span>CE-503(A)</span>
           <br>
           <span><b>Structural Analysis-II</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
       </div>

      
      <div>
         <span>CE-504(A)</span>
         <br>
         <span><b>Urban & Town Planning</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>
   `


         second_section.innerHTML = `
        <div>
            <span>CE-601</span>
            <br>
            <span><b>Structural Design & Drawing (RCC-I)</b></span>
            <br><br>
            <a href="http://">2020</a> &nbsp;  &nbsp;
            <a href="http://">2019</a>
            <br><br>
            <a href="http://">2019</a>&nbsp;  &nbsp;
            <a href="http://">2018</a> 
       </div>


       <div>
         <span>CE-602</span>
         <br>
         <span><b>Environmental Engg. -I</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>

      <div>
         <span>CE-603(A)</span>
         <br>
         <span><b>Water Resource Engg.</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>

  
      <div>
         <span>CE-604(B)</span>
         <br>
         <span><b>Fluid Mech. II</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
      </div>  `

      }


   } else {
      if (branch.value == 'ec') {
         // console.log(first_section.innerHTML);

         first_section.innerHTML = `
         <div>
             <span>EC-701</span>
             <br>
             <span><b>VLSI Design</b></span>
             <br><br>
             <a href="http://">2020</a> &nbsp;  &nbsp;
             <a href="http://">2019</a>
             <br><br>
             <a href="http://">2019</a>&nbsp;  &nbsp;
             <a href="http://">2018</a> 
         </div>


         <div>
           <span>EC-702(A)</span>
           <br>
           <span><b>Microwave Engg.</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
         </div>

       <div>
           <span>EC-703(B)</span>
           <br>
           <span><b>Internet of Thing (IoT)</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
       </div>

       `


         second_section.innerHTML = `
         <div>
         <span>EC-801</span>
         <br>
         <span><b>Optical Fiber Comm.</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
     </div>


     <div>
       <span>EC-802(B)</span>
       <br>
       <span><b>Wireless Comm.</b></span>
       <br><br>
       <a href="http://">2020</a> &nbsp;  &nbsp;
       <a href="http://">2019</a>
       <br><br>
       <a href="http://">2019</a>&nbsp;  &nbsp;
       <a href="http://">2018</a> 
     </div>

   <div>
       <span>EC-803(A)</span>
       <br>
       <span><b>Wireless Network</b></span>
       <br><br>
       <a href="http://">2020</a> &nbsp;  &nbsp;
       <a href="http://">2019</a>
       <br><br>
       <a href="http://">2019</a>&nbsp;  &nbsp;
       <a href="http://">2018</a> 
   </div>
`



      } else if (branch.value == 'it') {

         first_section.innerHTML = `
         <div>
             <span>IT-701</span>
             <br>
             <span><b>Soft Computing</b></span>
             <br><br>
             <a href="http://">2020</a> &nbsp;  &nbsp;
             <a href="http://">2019</a>
             <br><br>
             <a href="http://">2019</a>&nbsp;  &nbsp;
             <a href="http://">2018</a> 
         </div>


         <div>
           <span>IT-702(A)</span>
           <br>
           <span><b>Data Science</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
         </div>

       <div>
           <span>IT-703(B)</span>
           <br>
           <span><b>Internet of Thing (IoT)</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
       </div>

       `


         second_section.innerHTML = `
         <div>
         <span>IT-801</span>
         <br>
         <span><b>Info. Security</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
     </div>


     <div>
       <span>IT-802(B)</span>
       <br>
       <span><b>Machine Learning</b></span>
       <br><br>
       <a href="http://">2020</a> &nbsp;  &nbsp;
       <a href="http://">2019</a>
       <br><br>
       <a href="http://">2019</a>&nbsp;  &nbsp;
       <a href="http://">2018</a> 
     </div>

   <div>
       <span>IT-803(A)</span>
       <br>
       <span><b>Parallel Computing</b></span>
       <br><br>
       <a href="http://">2020</a> &nbsp;  &nbsp;
       <a href="http://">2019</a>
       <br><br>
       <a href="http://">2019</a>&nbsp;  &nbsp;
       <a href="http://">2018</a> 
   </div>
`



      } else if (branch.value == 'cs') {

         first_section.innerHTML = `
         <div>
             <span>CS-701</span>
             <br>
             <span><b>Software Architecture</b></span>
             <br><br>
             <a href="http://">2020</a> &nbsp;  &nbsp;
             <a href="http://">2019</a>
             <br><br>
             <a href="http://">2019</a>&nbsp;  &nbsp;
             <a href="http://">2018</a> 
         </div>


         <div>
           <span>CS-702(A)</span>
           <br>
           <span><b>Computational Intelligence</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
         </div>

       <div>
           <span>CS-703(A)</span>
           <br>
           <span><b>Cryptography & Info. Security</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
       </div>

       `


         second_section.innerHTML = `
         <div>
         <span>CS-801</span>
         <br>
         <span><b>Internet of Thing (IoT)</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
     </div>


     <div>
       <span>CS-802(D)</span>
       <br>
       <span><b>Object Oriented Software Engg.</b></span>
       <br><br>
       <a href="http://">2020</a> &nbsp;  &nbsp;
       <a href="http://">2019</a>
       <br><br>
       <a href="http://">2019</a>&nbsp;  &nbsp;
       <a href="http://">2018</a> 
     </div>

   <div>
       <span>CS-803(A)</span>
       <br>
       <span><b>Image Processing Computer Vision</b></span>
       <br><br>
       <a href="http://">2020</a> &nbsp;  &nbsp;
       <a href="http://">2019</a>
       <br><br>
       <a href="http://">2019</a>&nbsp;  &nbsp;
       <a href="http://">2018</a> 
   </div>
`
      } else if (branch.value == 'ee') {

         first_section.innerHTML = `
         <div>
             <span>EE-701</span>
             <br>
             <span><b>Electrical Drives</b></span>
             <br><br>
             <a href="http://">2020</a> &nbsp;  &nbsp;
             <a href="http://">2019</a>
             <br><br>
             <a href="http://">2019</a>&nbsp;  &nbsp;
             <a href="http://">2018</a> 
         </div>


         <div>
           <span>EE-702(B)</span>
           <br>
           <span><b>Power Electronics Apps. to Power System</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
         </div>

       <div>
           <span>EE-703(A)</span>
           <br>
           <span><b>Utilization of Electrical Energy</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
       </div>

       `


         second_section.innerHTML = `
      <div>
         <span>EE-801</span>
         <br>
         <span><b>Power Quanlity Improvement & Mitigation Technique</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
     </div>


     <div>
       <span>EE-802(A)</span>
       <br>
       <span><b>Advanced Electrical Drives</b></span>
       <br><br>
       <a href="http://">2020</a> &nbsp;  &nbsp;
       <a href="http://">2019</a>
       <br><br>
       <a href="http://">2019</a>&nbsp;  &nbsp;
       <a href="http://">2018</a> 
     </div>

   <div>
       <span>EE-803(A)</span>
       <br>
       <span><b>Power Electronics Converters for Renewable Energy</b></span>
       <br><br>
       <a href="http://">2020</a> &nbsp;  &nbsp;
       <a href="http://">2019</a>
       <br><br>
       <a href="http://">2019</a>&nbsp;  &nbsp;
       <a href="http://">2018</a> 
   </div>
`
      } else if (branch.value == 'me') {

         first_section.innerHTML = `
         <div>
             <span>ME-701</span>
             <br>
             <span><b>Heat & Mass Transfer</b></span>
             <br><br>
             <a href="http://">2020</a> &nbsp;  &nbsp;
             <a href="http://">2019</a>
             <br><br>
             <a href="http://">2019</a>&nbsp;  &nbsp;
             <a href="http://">2018</a> 
         </div>


         <div>
           <span>ME-702(B)</span>
           <br>
           <span><b>Internet of Things</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
         </div>

       <div>
           <span>ME-703(A)</span>
           <br>
           <span><b>Operation Research & Supply Chain</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
       </div>

       `

   second_section.innerHTML = `
      <div>
         <span>ME-801</span>
         <br>
         <span><b>Refrigeration & Air Conditioning</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
     </div>


     <div>
       <span>ME-802(A)</span>
       <br>
       <span><b>Automobile Engg.</b></span>
       <br><br>
       <a href="http://">2020</a> &nbsp;  &nbsp;
       <a href="http://">2019</a>
       <br><br>
       <a href="http://">2019</a>&nbsp;  &nbsp;
       <a href="http://">2018</a> 
     </div>

   <div>
       <span>ME-803(B)</span>
       <br>
       <span><b>Energy Conservation Manag. & Audit</b></span>
       <br><br>
       <a href="http://">2020</a> &nbsp;  &nbsp;
       <a href="http://">2019</a>
       <br><br>
       <a href="http://">2019</a>&nbsp;  &nbsp;
       <a href="http://">2018</a> 
   </div>
`


} else {

         first_section.innerHTML = `
         <div>
             <span>CE-701</span>
             <br>
             <span><b>Geotechnical Engg.</b></span>
             <br><br>
             <a href="http://">2020</a> &nbsp;  &nbsp;
             <a href="http://">2019</a>
             <br><br>
             <a href="http://">2019</a>&nbsp;  &nbsp;
             <a href="http://">2018</a> 
         </div>


         <div>
           <span>CE-702(A)</span>
           <br>
           <span><b> Prestressed Concrete Structure</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
         </div>

       <div>
           <span>CE-703(A)</span>
           <br>
           <span><b>Internet of Thing (IoT)</b></span>
           <br><br>
           <a href="http://">2020</a> &nbsp;  &nbsp;
           <a href="http://">2019</a>
           <br><br>
           <a href="http://">2019</a>&nbsp;  &nbsp;
           <a href="http://">2018</a> 
       </div>

       `


         second_section.innerHTML = `
         <div>
         <span>CE-801</span>
         <br>
         <span><b>Design of Steel Structures</b></span>
         <br><br>
         <a href="http://">2020</a> &nbsp;  &nbsp;
         <a href="http://">2019</a>
         <br><br>
         <a href="http://">2019</a>&nbsp;  &nbsp;
         <a href="http://">2018</a> 
     </div>


     <div>
       <span>CE-802(C)</span>
       <br>
       <span><b>Bridge Engg.</b></span>
       <br><br>
       <a href="http://">2020</a> &nbsp;  &nbsp;
       <a href="http://">2019</a>
       <br><br>
       <a href="http://">2019</a>&nbsp;  &nbsp;
       <a href="http://">2018</a> 
     </div>

   <div>
       <span>CE-803(D)</span>
       <br>
       <span><b>Integrated Water Manag.</b></span>
       <br><br>
       <a href="http://">2020</a> &nbsp;  &nbsp;
       <a href="http://">2019</a>
       <br><br>
       <a href="http://">2019</a>&nbsp;  &nbsp;
       <a href="http://">2018</a> 
   </div> `

      }
   }

}

let search = document.getElementById('search');

search.addEventListener('click', ()=>{
   load_pyq(year, branch)
});



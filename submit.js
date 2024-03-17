
function validateForm() 
{

  if (document.forms["myForm"]["gh"].value == "") {
    // <!-- alert("Profile for should not be empty."); -->
    // <!-- (submit) -->
    document.getElementById("profile").innerHTML = "Profile for should not be empty.";
    // <!-- (innerhtml) -->
    // <!-- document.getElementById("gh").style.borderColor="red"; -->
    // <!-- (boxcoloer) -->
    return false;
  }
  else
  {
      document.getElementById("profile").innerHTML = "";
    // <!-- return false; -->
    // <!-- innerHTML line atomatic cancall -->
    // <!-- document.getElementById("gh").style.borderColor="green"; -->
  }
  if (document.forms["myForm"]["fname"].value == "") {
    // <!-- alert("Name should not be empty."); -->
    document.getElementById("Name").innerHTML = "Name for should not be empty.";

    return false;
  }
   else
  {
      document.getElementById("Name").innerHTML = "";
    // <!-- return false; -->
    //  <!-- document.getElementById("fname").style.borderColor="green"; -->

  }
  
  if (document.forms["myForm"]["hg"].value == "") {
    // <!-- alert("Date of birth should not be empty."); -->
    document.getElementById("Date").innerHTML = " Date of birth for should not be empty.";
    // <!-- document.getElementById("hg").style.borderColor="red"; -->
    return false;
  }
  else
  {
      document.getElementById("Date").innerHTML = "";
    // <!-- return false; -->
    // <!-- document.getElementById("hg").style.borderColor="green"; -->
  }
  
  //alert(document.forms["myForm"]["radio1"].checked);
  
  if(document.forms["myForm"]["radio1"].checked == false && document.forms["myForm"]["radio2"].checked == false && document.forms["myForm"]["radio3"].checked == false){
    // <!-- alert("Gender should not be empty."); -->
  document.getElementById("Gender").innerHTML = " Gender for should not be empty.";
//   <!-- document.getElementById("radio1").style.borderColor="red"; -->
  return false;
  }
  else
  {
      document.getElementById("Gender").innerHTML = "";
    // <!-- return false; -->
    // <!-- document.getElementById("radio1").style.borderColor="green"; -->
  }
  
  
  if ((!document.forms["myForm"]["box1"].checked)&&(!document.forms["myForm"]["box2"].checked)&&(!document.forms["myForm"]["box3"].checked)) {
    // <!-- alert("Mother Tounge should not be empty."); -->
    document.getElementById("Mother").innerHTML = "Mother Tounge for should not be empty.";
    return false;
  }
  else
  {
      document.getElementById("Mother").innerHTML = "";
    // <!-- return false; -->
  }
  if (document.forms["myForm"]["dd"].value == "") {
    // <!-- alert("Mobile No should not be empty."); -->
document.getElementById("Mobile").innerHTML = " Mobile No for should not be empty.";
        // <!-- document.getElementById("dd").style.borderColor="red"; -->
    return false;
  
  }
  else
  {
      document.getElementById("Mobile").innerHTML = "";
    // <!-- return false; -->
    // <!-- document.getElementById("dd").style.borderColor="green"; -->
  }
  if (document.forms["myForm"]["aa"].value == "") {
    // <!-- alert("Email ID should not be empty."); -->
    document.getElementById("Email").innerHTML = " Email ID  for should not be empty.";
        // <!-- document.getElementById("aa").style.borderColor="red"; -->
    return false;
  }
  else
  {
      document.getElementById("Email").innerHTML = "";
    // <!-- return false; -->
    // <!-- document.getElementById("aa").style.borderColor="green"; -->
  }
  if (document.forms["myForm"]["bb"].value == "") {
    // <!-- alert("password should not be empty."); -->
    document.getElementById("password").innerHTML = " password  for should not be empty.";
        // <!-- document.getElementById("bb").style.borderColor="red"; -->
    return false;
  }
  else
  {
      document.getElementById("password").innerHTML = "";
    // <!-- return false; -->
    // <!-- document.getElementById("bb").style.borderColor="green"; -->
  }
  if (document.forms["myForm"]["ff"].value == "") {
    // <!-- alert(" OPT should not be empty."); -->
    document.getElementById("OPT").innerHTML = " OPT for should not be empty.";
        // <!-- document.getElementById("ff").style.borderColor="red"; -->
    return false;
  }
  else
  {
      document.getElementById("OPT").innerHTML = "";
    // <!-- return false; -->
    // <!-- document.getElementById("ff").style.borderColor="green"; -->
  }
}

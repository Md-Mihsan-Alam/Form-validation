namedata = () => {
    let x = document.forms["myForm"]["name"].value;
    let y = document.forms["myForm"]["pass"].value;

    if(x == "Mahfuz" && y == 102030){
        alert("name & password in correct");
        return true;
    }
    else if (x == "" && y == "") {
      alert("please fill Name & password..!!!");
      return false;
    }
    else{
        alert("something is wrong!");
        return false;
    }
}

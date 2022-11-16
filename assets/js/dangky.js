localStorage.setItem('username', 'Hoaminhtien');
localStorage.setItem('password', 'Zxcvbnm123**');
localStorage.setItem('hoten', 'Hoa Minh Tien');
localStorage.setItem('ngaysinh', '12/01/2002');
localStorage.setItem('gioitinh', 'Nam');
localStorage.setItem('diachi', '12 Nguyen Van Bao');
localStorage.setItem('sdt', '0912345678');
localStorage.setItem('email', 'hoatien1201@gmail.com');


$(document).ready(function () {
    /*Kiểm tra tên đăng nhập*/
  function kiemTraDN() {
    var kt = /(^[A-Z]{1})([a-z]+)(\w|\.|_[A-Z]{1}([a-z]+))*$/;
    if ($("#username").val() == "") {
      $("#ktDN").html("*Bắt buộc nhập !!");
      return false;
    }
    if (!kt.test($("#username").val())) {
      $("#ktDN").html("*Chữ cái đầu phải viết hoa, viết liền hoặc dùng dấu gạch dưới !!");
      return false;
    }
    $("#ktDN").html("*");
    return true;
  }
  $("#username").blur(kiemTraDN);


    /*Kiểm tra mật khẩu*/
  function kiemTraMK() {
    var kt = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if ($("#password").val() == "") {
      $("#ktMK").html("*Bắt buộc nhập !!");
      return false;
    }
    if (!kt.test($("#password").val())) {
      $("#ktMK").html("*Tối thiểu tám ký tự, bao gồm chữ cái, số và ký tự đặc biệt!!");
      return false;
    }
    $("#ktMK").html("*");
    return true;
  }
  $("#password").blur(kiemTraMK);


    /*Kiểm tra lại mật khẩu*/
  function kiemTraMK2() {
    if ($("#password-check").val() == "") {
      $("#ktMK2").html("*Bắt buộc nhập !!");
      return false;
    }
    if (($("#password-check").val()) !== ($("#password").val())) {
      $("#ktMK2").html("*Mật khẩu phải trùng!!");
      return false;
    }
    $("#ktMK2").html("*");
    return true;
  }
  $("#password-check").blur(kiemTraMK2);


  /*Kiểm tra họ tên*/
  function kiemTraHT() {
    var kt = /(^[A-Z]{1})([a-z]+)(\s[A-Z]{1}([a-z]+))*$/;
    if($("#txtTen").val() == ""){
        $("#tbTen").html("*Bắt buộc nhập !!");
        return false;
    }
    if(!kt.test($("#txtTen").val())){
        $("#tbTen").html("*Chữ cái đầu của mỗi từ phải viết hoa!!");
        return false;
    }
    $("#tbTen").html("*");
    return true;
    }
    $("#txtTen").blur(kiemTraHT);


    /*Kiểm tra ngày sinh*/
    function kiemTraNgaySinh() {
        if ($("#txtNS").val() == "") {
            $("#tbNS").html("* Bắt buộc nhập");
            return false;
        }
        var year = new Date($("#txtNS").val());
        var today = new Date();
        today.setFullYear(today.getFullYear());
        if ((today - year) < 14) {
            $("#tbNS").html("* Phải trên 14 tuổi");
            return false;
        }
        $("#tbNS").html("*");
        return true;
    }
    $("#txtNS").blur(kiemTraNgaySinh);


    /*Kiểm tra địa chỉ*/
    function kiemTraDC() {
      var kt =  /(^[A-Za-z0-9-_]+)(\s[A-Za-z0-9-_]+)*$/;
      if($("#diachi").val() == ""){
          $("#tbDC").html("*Bắt buộc nhập !!");
          return false;
      }
      if(!kt.test($("#diachi").val())){
          $("#tbDC").html("*Nhập sai địa chỉ !!");
          return false;
      }
      $("#tbDC").html("*");
      return true;
      }
      $("#diachi").blur(kiemTraDC);


    /*Kiểm tra số điện thoại*/
    function kiemTraPhone() {
      var kt =  /^(0[13789][0-9]{8}|1[89]00[0-9]{4})$/;
      if($("#phone").val() == ""){
          $("#tbSdt").html("*Bắt buộc nhập !!");
          return false;
      }
      if(!kt.test($("#phone").val())){
          $("#tbSdt").html("*Bắt đầu là 01 | 03 | 07 | 08 | 09 bao gồm 10 số !!");
          return false;
      }
      $("#tbSdt").html("*");
      return true;
      }
      $("#phone").blur(kiemTraPhone);


      /*Kiểm tra Email*/
      function kiemTraEmail() {
        var kt =  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if($("#email").val() == ""){
            $("#tbEmail").html("*Bắt buộc nhập !!");
            return false;
        }
        if(!kt.test($("#email").val())){
            $("#tbEmail").html("*Nhập sai email !!");
            return false;
        }
        $("#tbEmail").html("*");
        return true;
        }
        $("#email").blur(kiemTraEmail);


        /*Kiểm tra đăng ký*/
        $("#btn-signup").click(function() {
          if(!kiemTraDN() || !kiemTraMK() || !kiemTraMK2() || !kiemTraHT() || !kiemTraNgaySinh() || !kiemTraDC() || !kiemTraPhone() || !kiemTraEmail()) {
            alert("Bạn nhập sai hoặc thiếu thông tin vui lòng nhập lại !!");
            return false;
          }
          else {
            alert("Đăng ký thành công");
            return true;
          }
        })

});

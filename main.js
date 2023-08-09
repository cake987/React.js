 function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        const user = result.user;
        alert("Welcome " + user.displayName);
        console.log(user);
      })
      .catch(function(error) {
        // Handle error
        console.log(error);
      });
  }

  function signInWithGitHub() {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        const user = result.user;
        alert("Welcome " + user.displayName);
        console.log(user);
      })
      .catch(function(error) {
        // Handle error
        console.log(error);
      });
  }

  function signInWithOTP() {
    var num = document.getElementById('phnum').value;
    var phoneNumber = "+91" + num;
    console.log(phoneNumber);
    var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function(confirmationResult) {
        // OTP sent successfully
        var verificationCode = prompt("Please enter the OTP");
        return confirmationResult.confirm(verificationCode);
      })
      .then(function(result) {
        const user = result.user;
        alert("Welcome " + user.displayName);
        console.log(user);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function redirectToPage(url) {
    window.location.href = url;
  }
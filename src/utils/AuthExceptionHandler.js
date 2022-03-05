class AuthExceptionHandler {
    handleLoginException(e) {
      var status;
      switch (e.code) {
            case "auth/invalid-email":
                status = "Invalid email address.";
                break;
            case "auth/user-disabled":
                status = "Your account has been disabled.";
                break;
            case "auth/too-many-requests":
                status = "Too many requests. Try again later.";
                break;
            case "auth/unauthorized-domain":
                status = "Error, please login with your email/password.";
                break;
            default:
                status = "Incorrect email or password.";
                break;
      }
      return status;
    }
    handleRegisterException(e) {
        var status;
        switch (e.code) {
            case "auth/weak-password":
                status = "Password should be at least 6 characters.";
                break;
            case "auth/invalid-email":
                status = "Invalid email address.";
                break;
            case "auth/email-already-in-use":
                status = "Email is already taken. Please login or reset your password.";
                break;
            case "auth/too-many-requests":
                status = "Too many requests. Try again later.";
                break;
            default:
                status = "Error, please try again.";
                break;
        }
        return status;
      }
}

export default new AuthExceptionHandler();
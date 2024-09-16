import { toast } from "react-hot-toast";

export const getSimplifiedError = (error: any) => {
  if (!error.response) {
    toast.error("Check your network connection, refresh and please try again");
    return "Something went wrong, check your internet and please try again";
  }
  const errorObject = error?.response?.data;

  if (errorObject?.code === 500) {
    toast.error("Sorry an unexpected error occurred.");
    return "Sorry an unexpected error occurred.";
  }
  if (errorObject?.code === 400) {
    if (errorObject?.message === "Please Verify Your Email") {
      toast.error("Please Verify Your Email");
    } else {
      toast.error(errorObject?.message);
    }
  }

  if (errorObject.code === 403) {
    toast.error(errorObject?.error ?? "Not Permitted!");
    // console.error(error?.response?.error);
    return errorObject?.message;
  }
  if (errorObject.code === 404) {
    toast.error(errorObject?.message ?? "Resource Not Found!");
    // console.error(error?.response?.error);
    return errorObject?.message;
  } else if (errorObject?.code === 401) {
    if (errorObject?.message === "Please authenticate") {
      localStorage.removeItem("persist:root");
      setTimeout(() => {
        window.location.replace("/signup");
      }, 2000);
      return;
    }
    if (errorObject?.error === "Forbidden: Not Verified or Not Permitted") {
      setTimeout(() => {
        window.location.replace("/signup");
      }, 1000);
      return;
    }
    toast.error(errorObject?.message); //log here and perform action below

    return "Token has expired, please log in";
  } else {
    //Check for possible phone number unique issues
    return "Something went wrong";
  }
};

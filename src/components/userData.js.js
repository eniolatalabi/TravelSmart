export const loadUserData = async () => {

  };
  
  export const saveUserData = async (data) => {
    try {
      localStorage.setItem("userData", JSON.stringify(data));
      return true;
    } catch (error) {
      console.error("Error saving user data:", error);
      return false;
    }
  };
  
// Function to save user data to localStorage
export const saveUserData = (data) => {
  try {
    // Save the updated user data to localStorage
    localStorage.setItem("userData", JSON.stringify(data));
    return true;
  } catch (error) {
    console.error("Error saving user data:", error);
    return false; // Indicate failure
  }
};

// Existing loadUserData function...
export const loadUserData = async () => {
  try {
    let data = JSON.parse(localStorage.getItem("userData"));

    if (!data) {
      const response = await fetch("/data/user_data.json");
      if (!response.ok) {
        throw new Error("Failed to fetch user data from JSON file");
      }

      data = await response.json();
    }

    // Ensure data has a users property
    if (!data.users) {
      data = { users: [] }; // Set to an empty array if not present
    }

    // Save fetched data to localStorage for future use
    localStorage.setItem("userData", JSON.stringify(data));

    return data;
  } catch (error) {
    console.error("Error loading user data:", error);
    return { users: [] }; // Return empty data in case of error
  }
};

const saveUserInput = async () => {
    // Load existing user data
    const data = await loadUserData();
  
    // Ensure data is defined and has a users property
    if (!data || !data.users) {
      setErrors({ general: "Failed to load user data." });
      return;
    }
  
    // Create new user object
    const newUser = {
      fullname,
      email,
      password: passwordInput,
    };
  
    // Check for duplicate email
    const userExists = data.users.some(user => user.email === email);
    if (userExists) {
      setErrors({ email: "This email is already registered." });
      return;
    }
  
    // Append the new user to the users array
    data.users.push(newUser);
  
    // Save updated user data back to localStorage
    await saveUserData(data);
  
    // Optional: Save as file for download
    const fileData = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    saveAs(fileData, 'user_data.json');
  };
  
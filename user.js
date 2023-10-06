// Add a new user
const addUser = async (userId, email, role, departmentId) => {
    try {
      await firestore.collection('users').doc(userId).set({
        email,
        role,
        departmentId,
      });
    } catch (error) {
      console.error('Error adding user: ', error);
    }
  };
  
  // Get a user by ID
  const getUserById = async (userId) => {
    try {
      const userDoc = await firestore.collection('users').doc(userId).get();
      return userDoc.data();
    } catch (error) {
      console.error('Error getting user: ', error);
      return null;
    }
  };
  
// Add a new department
const addDepartment = async (departmentId, name) => {
    try {
      await firestore.collection('departments').doc(departmentId).set({ name });
    } catch (error) {
      console.error('Error adding department: ', error);
    }
  };
  
  // Get a department by ID
  const getDepartmentById = async (departmentId) => {
    try {
      const departmentDoc = await firestore.collection('departments').doc(departmentId).get();
      return departmentDoc.data();
    } catch (error) {
      console.error('Error getting department: ', error);
      return null;
    }
  };
  
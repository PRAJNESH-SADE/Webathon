// Add a new faculty member
const addFacultyMember = async (facultyId, userId, departmentId, designation) => {
    try {
      await firestore.collection('faculty').doc(facultyId).set({
        userId,
        departmentId,
        designation,
        invigilationsCount: 0,
        lastInvigilationDate: null,
      });
    } catch (error) {
      console.error('Error adding faculty member: ', error);
    }
  };
  
  // Get faculty member by ID
  const getFacultyMemberById = async (facultyId) => {
    try {
      const facultyDoc = await firestore.collection('faculty').doc(facultyId).get();
      return facultyDoc.data();
    } catch (error) {
      console.error('Error getting faculty member: ', error);
      return null;
    }
  };
  
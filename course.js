// Add a new course
const addCourse = async (courseId, courseName) => {
    try {
      await firestore.collection('courses').doc(courseId).set({ courseName });
    } catch (error) {
      console.error('Error adding course: ', error);
    }
  };
  
  // Get a course by ID
  const getCourseById = async (courseId) => {
    try {
      const courseDoc = await firestore.collection('courses').doc(courseId).get();
      return courseDoc.data();
    } catch (error) {
      console.error('Error getting course: ', error);
      return null;
    }
  };
  
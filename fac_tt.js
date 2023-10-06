// Add a new invigilation schedule
const addInvigilationSchedule = async (scheduleId, roomId, courseId, facultyId, date) => {
    try {
      await firestore.collection('invigilationSchedules').doc(scheduleId).set({
        roomId,
        courseId,
        facultyId,
        date,
      });
    } catch (error) {
      console.error('Error adding invigilation schedule: ', error);
    }
  };
  
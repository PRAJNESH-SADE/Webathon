// Add a new adjustment request
const addAdjustmentRequest = async (requestId, facultyId, requestedBy, status, reason, dateRequested) => {
    try {
      await firestore.collection('adjustmentRequests').doc(requestId).set({
        facultyId,
        requestedBy,
        status,
        reason,
        dateRequested,
      });
    } catch (error) {
      console.error('Error adding adjustment request: ', error);
    }
  };
  
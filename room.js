// Add a new room
const addRoom = async (roomId, roomName) => {
    try {
      await firestore.collection('rooms').doc(roomId).set({ roomName });
    } catch (error) {
      console.error('Error adding room: ', error);
    }
  };
  
  // Get a room by ID
  const getRoomById = async (roomId) => {
    try {
      const roomDoc = await firestore.collection('rooms').doc(roomId).get();
      return roomDoc.data();
    } catch (error) {
      console.error('Error getting room: ', error);
      return null;
    }
  };
  
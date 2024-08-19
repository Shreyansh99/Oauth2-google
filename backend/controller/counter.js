import Counter from "../model/counter.schema.js"

const counter = async (req, res) => {
    try {
      const { count } = req.body;
      console.log('Received count:', count);
  
      // Update the counter in the database
      const result = await Counter.updateOne(
        {}, // Filter: Update the first document (or use a specific filter if needed)
        { $set: { count } } // Update operation: Set the count value
      );
  
      console.log('Update result:', result);
  
      // Send a JSON response with the result of the update
      res.json({ success: true, count });
    } catch (error) {
      console.error('Error updating counter:', error);
      res.status(500).json({ message: 'Failed to update counter' });
    }
  };
export default counter  
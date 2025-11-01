
// controllers/recommendationController.js
import Event from '../models/Event.js';
import User from '../models/User.js';

export const getRecommendations = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('registeredEvents');
    const interests = (user && user.interests) || [];

    const recommendedEvents = await Event.find({
      category: { $in: interests },
      isApproved: true
    }).limit(5);

    res.json(recommendedEvents);
  } catch (err) {
    console.error('Recommendation error:', err);
    res.status(500).json({ message: 'Error fetching recommendations' });
  }
};



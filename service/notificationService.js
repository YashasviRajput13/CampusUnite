
import User from '../models/userModel.js';
import Notification from '../models/notificationModel.js';

export const sendInterestBasedNotifications = async (event) => {
  try {
    const interestedUsers = await User.find({
      interests: { $in: [event.category, ...event.tags] }
    });

    if (!interestedUsers.length) return;

    const notifications = interestedUsers.map(user => ({
      userId: user._id,
      title: '🎉 New Event You Might Like!',
      message: `${event.title} matches your interests. Check it out!`
    }));

    await Notification.insertMany(notifications);
    console.log(`✅ Sent ${notifications.length} notifications for ${event.title}`);
  } catch (error) {
    console.error('Error sending notifications:', error);
  }
};

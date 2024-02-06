const cron = require("node-cron");
const twilio = require("twilio");

const User = require("../models/user.model");
const Task = require("../models/task.model");

const twilioClient = twilio(
  "AC2307d0a1b8cab54a7c6d90d9b70a41bf",
  "bf11b146eeadbb5d5a0fada3066e1008"
);

cron.schedule("0 * * * *", async () => {
  try {
    const users = await User.find().sort({ priority: 1 });
    for (const user of users) {
      const highPriorityTasks = await Task.find({
        user_id: user._id,
        priority: { $gt: 1 },
      }).countDocuments();

      if (highPriorityTasks > 0) {
        await twilioClient.calls.create({
          to: user.phoneNumber,
          from: "+18146662701",
          url: "https://api.twilio.com/2010-04-01/Accounts/AC2307d0a1b8cab54a7c6d90d9b70a41bf/Calls.json",
        });
        console.log(`Call initiated for user ${user.name}`);
        break;
      }
    }
    console.log("Voice calls initiated successfully.");
  } catch (error) {
    console.error("Error initiating voice calls:", error);
  }
});

exports.do = async () => {
  
        await twilioClient.calls.create({
          to: '+916375778714',
          from: "+18146662701",
          url: "https://api.twilio.com/2010-04-01/Accounts/AC2307d0a1b8cab54a7c6d90d9b70a41bf/Calls.json",
        });
        console.log(`Call initiated for user`);
  
};


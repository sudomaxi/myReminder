const cron = require('node-cron');
const Task = require('../models/task.model');

cron.schedule('0 0 * * *', async () => {
    try {
        const overdueTasks = await Task.find({ due_date: { $lt: new Date() } });
        overdueTasks.forEach(async task => {
            task.priority -= 1;
            await task.save();
        });
        console.log('Task priorities updated successfully.');
    } catch (error) {
        console.error('Error updating task priorities:', error);
    }
});
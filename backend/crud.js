const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://jofisch:RuB95D4yRnQ6puM6@cluster0.iuy0qon.mongodb.net/';
const client = new MongoClient(uri);

async function createTask(name, points) {

  const task = {
    "name": name,
    "points": points,
    "status": 0
  }

  try {
    await client.connect();
    const result = await client.db("Backend").collection("Tasks").insertOne(task);
    console.log(`New task created with the following id: ${result.insertedId}`);

  } catch (e) {
    console.log(e)
  } finally {
    await client.close();
  }
};

async function getTaskByName(name) {
  try {
    await client.connect();
    const result = await client.db("Backend").collection("Tasks").findOne({ "name": name });

    if (result) {
      console.log(`Found a task in the collection with the name '${name}':`);
      console.log(result);
      return result;
    } else {
      console.log(`No task found with the name '${name}'`);
    }
    return null;

  } catch (e) {
    console.log(e)
  } finally {
    await client.close();
  }
};

async function updateTaskStatus(task, status) {
  const updatedTask = {
    "status": status
  }

  try {
    await client.connect();
    const result = await client.db("Backend").collection("Tasks")
      .updateOne({ "name": task }, { $set: updatedTask });
    return result;

  } catch (e) {
    console.log(e)
  } finally {
    await client.close();
  }
}

async function deleteTaskByName(task) {
  try {
    await client.connect();
    const result = await client.db("Backend").collection("Tasks")
      .deleteOne({ "name": task });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);

  } catch (e) {
    console.log(e)
  } finally {
    await client.close();
  }
}

async function searchTasks(search) {
  try {
    await client.connect();
    let regex = new RegExp(`^${search}`, "i")
    const cursor = await client.db("Backend").collection("Tasks")
      .find({ "name": regex })/*.sort({ "name": 1 })*/;

    const results = await cursor.toArray();
    if (results.length > 0) {
      console.log(`Found a task in the collection with the search parameter '${search}':`);
      results.forEach((result) => {
        console.log(result);
      });
      return results;
    } else {
      console.log(`No task found with the search parameter '${search}'`);
    }
    return null;

  } catch (e) {
    console.log(e)
  } finally {
    await client.close();
  }
}

// createTask("Sushi", 15);
// updateTaskStatus("Sushi", 1);
// getTaskByName("Sushi");
// deleteTaskByName("Sushi");
// searchTasks("sus");

/* Find all with bedrooms greater than or equal to # of bedrooms and bathrooms
client.db("sample_airbnb").collection("listingsAndReviews").find(
  {
      bedrooms: { $gte: minimumNumberOfBedrooms },
      bathrooms: { $gte: minimumNumberOfBathrooms }
  }
); */
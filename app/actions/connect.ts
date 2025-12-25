import mongoose from "mongoose";



const cached = (global as any).mongoose ||  {conn : null , promise : null }


export default async function connsect () {
  if (cached.conn) return cached.conn;

  cached.promise = cached.promis || mongoose
  .connect(process.env.MONGO_URI! , {dbName : "Cluster0",bufferCommands : false})
  .then(()=> console.log("database is connected successfully"))
  .catch((err) => console.log(err), )

  cached.conn = await cached.promise;
  return cached.conn;
}
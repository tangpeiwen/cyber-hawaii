import { MongoClient } from "mongodb"

let uri = process.env.MONGODB_URI

let mongo: MongoClient | null = null

// if (!uri) throw new Error('Missing environment variable MANGO_URI')

if (!uri) {
    throw new Error('Invalid environment variable: "MONGODB_URI"')
  }

export async function connect() {
    if (mongo) return mongo
    mongo = await MongoClient.connect(uri as string)
    return mongo
}

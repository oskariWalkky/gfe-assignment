import { Collection, MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

let client: MongoClient;
export const collections: { movies?: Collection } = {};

export async function connectToDatabase(): Promise<void> {
    dotenv.config();

    if (process.env.DB_CONN_STRING && process.env.GFE_MOVIES_COLLECTION_NAME) {
        client = new MongoClient(process.env.DB_CONN_STRING, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        await client.connect();
        const db = client.db(process.env.DB_NAME);
        const moviesCollection: Collection = db.collection(process.env.GFE_MOVIES_COLLECTION_NAME);
        collections.movies = moviesCollection;
        console.log(`Successfully connected to database: ${db.databaseName} and collection: ${moviesCollection.collectionName}`);
    } else {
        throw new Error(".env file does not contain the needed variable");
    }
}

// Graceful shutdown logic
process.on('SIGINT', async () => {
    await client.close();
    console.log("Gracefully shutting down from SIGINT (Ctrl+C)...");
    process.exit();
});

process.on('SIGTERM', async () => {
    console.log("Gracefully shutting down from SIGTERM...");
    await client.close();
    process.exit();
});
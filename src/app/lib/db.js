require('dotenv').config();

const { USERNAME, PASSWORD } = process.env;
export const connectionStr = `mongodb+srv://mgabalte:google2025@cluster0.oxw6z.mongodb.net/restodb?retryWrites=true&w=majority&appName=Cluster0`;
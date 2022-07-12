import dotenv from "dotenv";
import { Client, Locale } from "node-appwrite";
dotenv.config();

let client = new Client();

client
  .setEndpoint(process.env.HOSTNAME_OR_IP) // Your API Endpoint
  .setProject(process.env.PROJECT_ID) // Your project ID
  .setKey(process.env.API_SECRET) // Your secret API key
  .setSelfSigned(); // Use only on dev mode with a self-signed SSL cert

let locale = new Locale(client);
// export default {
//   port: 3100,
//   async fetch(request) {
//     const contries = await locale.getCountries();
//     return new Response(JSON.stringify(contries));
//   },
// };

const wait = async () => {
  const contries = await locale.getCountries();
  console.log(contries);
};

wait();

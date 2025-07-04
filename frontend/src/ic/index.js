import { HttpAgent, Actor } from "@dfinity/agent";
import { idlFactory, canisterId as defaultCanisterId } from "../../../src/declarations/icp_rust_boilerplate_backend";

console.log("🧪 Canister ID at runtime:", defaultCanisterId);
console.log("🔎 Raw ENV value:", import.meta.env.VITE_CANISTER_ID_ICP_RUST_BOILERPLATE_BACKEND);


// Export reusable createActor
export function createActor(canisterId = defaultCanisterId) {
  const agent = new HttpAgent({
    host: "http://127.0.0.1:4943",
  });

  // Correct Vite-compatible check for development mode
  if (import.meta.env.MODE === "development") {
    agent.fetchRootKey().catch((err) => {
      console.warn("Unable to fetch root key. Is the local replica running?");
      console.error(err);
    });
  }

  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
  });
}

// Optional: Keep default backend instance
export const backend = createActor();

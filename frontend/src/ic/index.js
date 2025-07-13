import { HttpAgent, Actor } from '@dfinity/agent';
import { idlFactory, canisterId } from './icp_rust_boilerplate_backend';

const defaultCanisterId = import.meta.env.VITE_CANISTER_ID_ICP_RUST_BOILERPLATE_BACKEND || canisterId;

console.log("🧪 Canister ID at runtime:", defaultCanisterId);
console.log("🔎 Raw ENV value:", import.meta.env.VITE_CANISTER_ID_ICP_RUST_BOILERPLATE_BACKEND);


export function createActor(canisterId = defaultCanisterId) {
  const agent = new HttpAgent({
    // ✅ FORCE LOCAL HOST FOR LOCAL TESTING
    host: 'http://localhost:4943',
  });


  if (import.meta.env.MODE === 'development') {
    agent.fetchRootKey().catch((err) => {
      console.warn('⚠️ Unable to fetch root key. Is the local replica running?');
      console.error(err);
    });
  }

  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
  });
}

export const backend = createActor();


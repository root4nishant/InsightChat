export const sendSessionIdToExtension = (sessionId: string) => {
  try {
    window.postMessage({ type: "CLERK_SESSION_ID", sessionId }, "*");
    console.log("📤 Clerk sessionId sent to extension");
  } catch (err) {
    console.error("❌ Failed to send sessionId to extension:", err);
  }
};

# InsightChat

InsightChat is an AI-powered chat insight platform that helps users analyze conversational data in real-time, uncover sentiment trends, tag topics, and generate summaries from chats. This frontend connects to a backend powered by Redis, workers, and LLMs like Gemini/OpenAI.

## 🧠 Features

- Real-time chat analysis dashboard
- Chrome extension integration for live data extraction
- Session history with filters and detailed insights
- Sentiment analysis and topic tagging
- AI-generated chat summaries and response suggestions
- Scalable async processing with WebSocket/polling
- Secure Clerk authentication and routing

## 🚀 Tech Stack

- **Next.js** (App Router)
- **Tailwind CSS** & **shadcn/ui**
- **Clerk** for authentication
- **Axios** for backend API calls
- **WebSocket / Polling** for async updates

## 🧩 Folder Structure

```
/app               → Next.js routes & pages
/components        → UI and layout components
/hooks             → Custom React hooks
/lib               → Utility functions (API clients, etc.)
/public            → Static assets
/styles            → Global Tailwind styles
```

## ⚙️ Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/root4nishant/insightChat.git
cd insightChat

# 2. Install dependencies
pnpm install

# 3. Set up environment variables
cp .env.example .env.local
# Fill in Clerk, backend URLs, etc.

# 4. Run the dev server
pnpm dev
```

## 🛡️ Environment Variables

You’ll need:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_BACKEND_URL`

## 📦 Build & Deploy

```bash
pnpm build
pnpm start
```

Can be deployed to **Vercel** or any static hosting platform.

## 📬 Feedback

For bugs or feature requests, feel free to open an issue or contact the team.

---

Built with ❤️ by the InsightChat Team.
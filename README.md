# 🌟 Life Coach - AI-Powered Productivity & Wellness System

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Google AI](https://img.shields.io/badge/Google_AI-Gemini-4285F4?style=for-the-badge&logo=google)

**Elevate Your Life with AI-Powered Productivity**

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack) • [Configuration](#-configuration)

</div>

---

## 📖 Overview

**Life Coach** is a comprehensive, AI-powered personal productivity and wellness system built with Next.js 16 and Google's Gemini AI. It combines intelligent task management, adaptive coaching, focus enhancement, and mindful journaling into one seamless experience.

### 🎯 What Makes It Special?

- **AI Life Coach**: Personalized guidance with multiple coaching styles (Supportive, Tough Love, Analytical, Humorous, Zen)
- **Smart Task Management**: AI-powered task prioritization with natural language commands
- **AI-Enhanced Pomodoro**: Focus timer with facial recognition and screen activity monitoring
- **Intelligent Journal**: Rich text editor with AI-powered daily reflections
- **Mood Tracking**: Emotional wellness insights integrated across all features
- **Context-Aware**: All features work together, sharing context for a unified experience

---

## ✨ Features

### 🤖 AI Life Coach
- **Multiple Coaching Personalities**: Choose from 5 distinct coaching styles
- **Context-Aware Conversations**: AI knows your tasks, mood, and daily progress
- **Voice & Text Input**: Natural conversation with voice note support
- **Smart Actions**: AI can create tasks, set timers, and update your journal directly
- **Chat History**: Organized sessions with searchable conversation history
- **File Attachments**: Share images and documents for richer context

### ✅ Smart To-Do List
- **Priority Management**: High, Medium, Low priority levels with visual indicators
- **Due Dates & Times**: Schedule tasks with date and time reminders
- **AI Integration**: Create and complete tasks through natural language with your AI coach
- **Task Categories**: Separate active and completed task views
- **Drag & Drop**: (Future enhancement ready)
- **URL-based Editing**: Deep link support for quick task editing

### ⏱️ AI-Powered Pomodoro Timer
- **Customizable Intervals**: Adjust work and break durations to your preference
- **Cycle Tracking**: Monitor your productivity streaks
- **Facial Recognition**: AI detects when you're away from your desk using BlazeFace ML model
- **Screen Activity Monitoring**: AI Guardian analyzes your screen to detect distractions
- **Distraction Alerts**: Real-time warnings when you're not focused on your task
- **Visual Feedback**: Beautiful progress indicators and session stats

### 📔 Daily Journal
- **Rich Text Editor**: Powered by TiptapEditor with full formatting support
- **Slash Commands**: Quick access to formatting options (headings, lists, code blocks, etc.)
- **Bubble Menu**: Context-aware formatting toolbar
- **Custom Styling**: Text colors, highlights, and styles
- **Media Support**: Embed images and YouTube videos
- **AI Integration**: Coach can automatically append reflections to your journal
- **Cover Images & Icons**: Personalize each journal entry
- **Auto-save**: Never lose your thoughts

### 🎨 Customization
- **20+ Color Themes**: From minimal to vibrant (Catppuccin, Tokyo Night, Dracula, Nord, Solarized, GitHub, Monokai, Synthwave, Cyberpunk, Lo-Fi, Carbon)
- **Responsive Design**: Beautiful on desktop, tablet, and mobile
- **Dark/Light Mode**: System-aware with manual override
- **Smooth Animations**: Framer Motion for delightful interactions

### 📊 Profile & Stats
- **Personal Profile**: Set your name, bio, and preferences
- **Coaching Style Selection**: Customize AI behavior to match your needs
- **Theme Preferences**: Choose your perfect aesthetic
- **Progress Tracking**: (Future: Mood trends, task completion rates, focus time analytics)

---

## 🚀 Installation

### Prerequisites

- **Node.js** 18.0 or higher
- **npm**, **yarn**, **pnpm**, or **bun**
- **Google Gemini API Key** (required for AI features)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abilaashss/Life-Coach.git
   cd life-coach
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
   ```

   **Get your Gemini API key:**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Sign in with your Google account
   - Create a new API key
   - Copy and paste it into your `.env.local` file

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🎮 Usage

### First Time Setup

1. **Configure Your Profile**
   - Navigate to Settings (`/settings`)
   - Enter your name and bio
   - Select your preferred coaching style
   - Choose your color theme

2. **Start with Your AI Coach**
   - Go to the Coach tab (`/coach`)
   - Tell the AI about your goals and what you want to achieve
   - The AI will help you create tasks and plan your day

3. **Create Your First Tasks**
   - Either use the To-Do tab (`/todo`) directly
   - Or ask your AI coach to create tasks for you
   - Set priorities and due dates

4. **Start a Focus Session**
   - Go to the Pomodoro tab (`/pomodoro`)
   - Set your work duration (default 25 minutes)
   - Enable AI monitoring for distraction detection
   - Click Start and focus on your work

5. **Reflect in Your Journal**
   - Open the Journal tab (`/journal`)
   - Write about your day
   - Use `/` for quick formatting commands
   - Let the AI help capture your thoughts automatically

### AI Coach Commands

Your AI coach can perform actions through natural language. Here are some examples:

**Task Management:**
- "Add a task to finish the project report with high priority"
- "Mark task XYZ as complete"
- "Show me my incomplete tasks"

**Timer Control:**
- "Set a 25-minute focus timer"
- "Let's do a quick 15-minute work session"

**Journal Updates:**
- "I had a great workout today" → AI adds to your journal
- "Completed three client calls this afternoon" → AI logs it

### Keyboard Shortcuts (Journal)

- `Ctrl/Cmd + Z` - Undo
- `Ctrl/Cmd + Y` - Redo
- `Ctrl/Cmd + B` - Bold
- `Ctrl/Cmd + I` - Italic
- `/` - Open command menu

### AI Monitoring Features

**Facial Recognition:**
- Requires webcam permission
- Detects when you're away from your desk
- Automatically pauses timer if you're gone too long

**Screen Activity Monitor (AI Guardian):**
- Requires screen sharing permission
- Analyzes what's on your screen
- Detects if you're distracted (social media, videos, etc.)
- Provides gentle reminders to stay focused

---

## 🛠️ Tech Stack

### Core Framework
- **Next.js 16** - React framework with App Router
- **React 19.2** - UI library with Server Components
- **TypeScript** - Type safety and better DX

### AI & Machine Learning
- **Google Generative AI** - Gemini 3 Pro for conversational AI
- **TensorFlow.js** - Client-side ML runtime
- **BlazeFace** - Facial detection model

### UI & Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **class-variance-authority** - Component variant management

### Rich Text Editing
- **Tiptap** - Headless editor framework
  - Bubble Menu
  - Slash Commands
  - Code Blocks
  - Image & YouTube embeds
  - Syntax highlighting

### Additional Libraries
- **React Webcam** - Camera access
- **Recharts** - Data visualization
- **Emoji Picker React** - Emoji selection
- **Tippy.js** - Tooltips
- **clsx & tailwind-merge** - Utility functions

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **React Compiler** - Performance optimization

---

## ⚙️ Configuration

### Environment Variables

```env
# Required
NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here

# Optional (if you add backend features)
# DATABASE_URL=your_database_url
# NEXTAUTH_SECRET=your_auth_secret
```

### Customizing Coaching Styles

Edit `/src/lib/gemini.ts` to modify AI behavior:

```typescript
// Adjust system prompts, tone, or add new coaching styles
const systemPrompt = `...`
```

### Adding New Themes

Edit `/src/app/globals.css` to add custom color themes:

```css
[data-theme="your-theme"] {
  --background: ...;
  --foreground: ...;
  /* Add your color variables */
}
```

### Adjusting Timer Defaults

Modify initial state in `/src/context/AppContext.tsx`:

```typescript
const [workDuration, setWorkDuration] = useState(25); // Default work time
const [breakDuration, setBreakDuration] = useState(5); // Default break time
```

---

## 🧠 AI Agent Implementation (architecture & concrete details)

This section explains how the AI agent is implemented in the codebase, where the important files live, the message & action contract it uses, and how to test and extend it safely.

### High-level architecture
- The AI agent is a thin orchestration layer that calls Google Gemini for conversational understanding and generation. It runs from the browser (client) and/or server components depending on the feature (chat UI is client-side; heavy orchestration or secrets should run on server-side API routes).
- Key integration file: `src/lib/gemini.ts` — this module contains request builders, system prompts, retry logic, and lightweight caching for Gemini calls.
- Agent responsibilities:
   - Interpret user input (intent + entities)
   - Decide if a direct reply or a 'tool/action' is required (create task, set timer, append journal, query state)
   - Execute actions through local functions (no external network calls except Gemini and optional backend)
   - Maintain short-term conversational context (chat history + relevant app state snapshot)

### System prompts & personalities
- We implement 5 coaching personalities by varying the system prompt in `src/lib/gemini.ts`.
- Example prompts live as constants in `gemini.ts`. Each prompt includes:
   - role: system
   - persona description (tone, boundaries)
   - available tools/actions and their JSON schema
   - explicit safety constraints (privacy, no PII exfiltration, no medical/legal advice)

Sample system prompt (conceptual):

```text
You are Life Coach, a concise and supportive assistant. You have access to actions: create_task, update_task, set_timer, append_journal. When you want to perform an action, reply with a JSON block exactly matching the action schema. Otherwise reply conversationally. Tone: SUPPORTIVE | TOUGH_LOVE | ANALYTICAL | HUMOROUS | ZEN depending on user preference.
```

### Action / Tool contract (JSON shapes)
The agent uses structured JSON to declare actions. `src/lib/gemini.ts` validates these before executing local handlers.

Common actions (examples):

- create_task
   - payload: { "title": string, "notes"?: string, "priority"?: "high"|"medium"|"low", "dueDate"?: ISOString }
- update_task
   - payload: { "id": string, "fields": { ... } }
- set_timer
   - payload: { "minutes": number, "label"?: string, "autoPauseOnAway"?: boolean }
- append_journal
   - payload: { "entryId"?: string, "content": string, "tags"?: string[] }

Agent responses follow this pattern:
- If actionable: send JSON with `action` and `payload` fields in a fenced block so the UI can parse reliably.
- If conversational: plain text reply.

### Where to look in code
- `src/lib/gemini.ts`
   - build request payloads for Gemini, swap system prompt for chosen personality
   - parse model responses and extract action JSON using a small deterministic parser
   - retry & backoff for transient errors (exponential backoff up to 3 attempts)
- `src/components/CoachChat.tsx`
   - UI for chat messages, voice input, and action dispatching
   - renders model replies and intercepts JSON action blocks to call local handlers
- `src/context/AppContext.tsx`
   - central store for tasks, timers, journal entries, and short-term chat context
   - exposes functions: createTask, updateTask, startTimer, appendJournal (these are called by the chat layer)

### Execution flow (example: user asks to "Create a task")
1. User types: "Create a task to finish slides by Friday with high priority"
2. `CoachChat` forwards text to `gemini.ts` with the current persona and relevant context (user tasks summary, today stats)
3. Gemini returns either a plain reply or an action JSON like:
    ```json
    {
       "action":"create_task",
       "payload":{
          "title":"Finish slides",
          "priority":"high",
          "dueDate":"2026-01-08T17:00:00.000Z",
          "notes":"Include final case study slide"
       }
    }
    ```
4. `CoachChat` detects action JSON, validates it against the local schema, then calls `createTask()` from `AppContext`.
5. Task is added to local state (and optionally POSTed to a backend). The chat shows a confirmation message.

### Error handling, retries & rate limits
- `gemini.ts` should:
   - Surface readable errors to the UI (network, auth, rate limits)
   - Use exponential backoff on 5xx/ratelimit responses (max 3 attempts)
   - Fall back to a simpler, local/NLU-based parser if Gemini fails repeatedly: e.g., use regex-based slot extraction for common commands

### Security & privacy notes
- Never send raw private data or attachments to Gemini unless explicitly opted-in by user and documented in app settings.
- Keep the Gemini API key server-side where possible; prefer server-side API routes that proxy requests so `NEXT_PUBLIC_*` keys are not exposed. If the key must be used in the client for experiments, store only `NEXT_PUBLIC_GEMINI_API_KEY` and rotate it frequently.
- Remove or redact PII from context before sending it to the model. `src/lib/gemini.ts` contains a small sanitizer hook to remove email addresses and long text blobs unless the user confirms.

### Local testing & mocking
- Create a local mock adapter for Gemini responses to run offline and for unit tests. Put mock behaviors under `__mocks__/gemini.mock.ts` or similar.
- Example test pattern:
   1. Mock Gemini to return an action JSON for a create_task example
   2. Render `CoachChat` and type the command
   3. Assert `AppContext` has a new task and that the UI shows confirmation

### Extending coaching styles
- Add a new persona constant to `src/lib/gemini.ts` with a descriptive system prompt. Keep the available action schemas unchanged unless you add handlers in `AppContext`.

### Telemetry & logs
- Log only event metadata (action type, timestamp, outcome) to local storage or a server store if enabled. Avoid logging PII. Provide an opt-out switch in Settings.

### Helpful development tips
- When iterating prompts, keep a separate `devSystemPrompt` constant and load it only in non-production builds to experiment faster.
- Keep the action JSON small and use ISO strings for dates to avoid timezone bugs.

### Example developer checklist for adding a new agent-driven feature
1. Add a new action schema in `src/lib/gemini.ts`.
2. Add a handler function in `src/context/AppContext.tsx` that implements the action locally.
3. Update `CoachChat` to recognize and route the action to the new handler.
4. Write unit tests: mocked Gemini response → UI interaction → state change assertion.

---

## 📂 Project Structure

```
life-coach/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── coach/              # AI Coach page
│   │   ├── journal/            # Journal page
│   │   ├── pomodoro/           # Pomodoro timer page
│   │   ├── settings/           # Settings page
│   │   └── todo/               # Task list page
│   ├── components/             # React components
│   │   ├── ChatSidebar.tsx     # Chat history sidebar
│   │   ├── CoachChat.tsx       # Main AI chat interface
│   │   ├── JournalEditor.tsx   # Rich text editor
│   │   ├── JournalHeader.tsx   # Journal controls
│   │   ├── MoodTracker.tsx     # Mood selection
│   │   ├── Navigation.tsx      # Main nav bar
│   │   ├── Pomodoro.tsx        # Timer component
│   │   ├── ProfileStats.tsx    # User stats display
│   │   ├── TaskBoard.tsx       # Task management UI
│   │   ├── editor/             # Editor extensions
│   │   │   ├── EditorBubbleMenu.tsx
│   │   │   └── SlashCommand.tsx
│   │   └── ui/                 # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Input.tsx
│   ├── context/
│   │   └── AppContext.tsx      # Global state management
│   └── lib/
│       ├── gemini.ts           # AI integration
│       └── utils.ts            # Utility functions
├── public/                     # Static assets
├── .env.local                  # Environment variables (create this)
├── next.config.ts              # Next.js configuration
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

---

## 🎨 Screenshots

### Home Dashboard
Beautiful landing page with feature cards and smooth animations.

### AI Life Coach
Conversational interface with context-aware responses and smart actions.

### Smart To-Do List
Priority-based task management with visual indicators and due dates.

### Pomodoro Timer
AI-enhanced focus sessions with presence detection.

### Daily Journal
Rich text editor with slash commands and formatting options.

---

## 🚧 Roadmap

### Upcoming Features
- [ ] **Data Persistence**: Backend integration with database
- [ ] **User Authentication**: Multi-user support
- [ ] **Analytics Dashboard**: Detailed productivity insights
- [ ] **Habit Tracking**: Build and monitor daily habits
- [ ] **Calendar Integration**: Sync with Google Calendar
- [ ] **Mobile App**: React Native version
- [ ] **Offline Mode**: PWA capabilities
- [ ] **Export Features**: PDF/Markdown export for journal
- [ ] **Team Features**: Collaborative tasks and shared goals
- [ ] **Advanced AI**: Custom AI training on your data

### Known Issues
- Screen monitoring requires manual permission grant
- Webcam detection may not work on all browsers
- Local storage limitations (no cloud sync yet)

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **Google AI** - For the powerful Gemini API
- **Vercel** - For Next.js and hosting platform
- **TensorFlow Team** - For client-side ML capabilities
- **Tiptap** - For the excellent editor framework
- **Open Source Community** - For all the amazing libraries

---

## 📞 Support

Having issues or questions?

- 🐛 [Report a Bug](https://github.com/Abilaashss/Life-Coach/issues)
- 💡 [Request a Feature](https://github.com/Abilaashss/Life-Coach/issues)
- 📧 Contact: [Your Email]
- 🌐 Website: [Your Website]

---

## 🌟 Star History

If you find this project useful, please consider giving it a star! ⭐

---

<div align="center">

**Built with ❤️ by [Abilaashss](https://github.com/Abilaashss)**

**Made possible by AI, designed for humans.**

[⬆ Back to Top](#-life-coach---ai-powered-productivity--wellness-system)

</div>

# Stack Pilot

A production-ready monorepo demonstrating a modern Expo + Next.js + AI stack. Generate complete application structures with AI and deploy immediately.

## 🚀 Tech Stack

### Frontend Web
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Server Actions**

### Mobile
- **Expo** (latest stable)
- **React Native**
- **NativeWind** (Tailwind for React Native)
- **Formik + Yup** (form validation)

### Backend / AI
- **Edge-compatible API routes**
- **Groq SDK** (Llama 3.3 70B)
- **Streaming-friendly architecture**

### Monorepo
- **Turbo** (build system)
- **Workspaces** (npm/yarn/pnpm)

## 📁 Folder Structure

```
stack-pilot/
├── apps/
│   ├── web/              # Next.js web application
│   │   ├── src/
│   │   │   └── app/      # App Router pages
│   │   └── package.json
│   └── mobile/          # Expo mobile application
│       ├── app/          # Expo Router pages
│       └── package.json
├── packages/
│   ├── ui/               # Shared UI components
│   ├── config/           # Shared configurations
│   └── ai/               # AI generation logic
├── package.json          # Root workspace config
├── turbo.json            # Turbo build config
└── tsconfig.base.json    # Shared TypeScript config
```

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Expo CLI (optional, for mobile development)

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd stack-pilot
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
   
   Create a `.env.local` file in the `apps/web/` directory:
   ```bash
   cd apps/web
   touch .env.local
   ```
   
   Add your Groq API key to `apps/web/.env.local`:
   ```
   GROQ_API_KEY=your_groq_api_key_here
   NEXT_PUBLIC_APP_NAME=Stack Pilot
   ```
   
   **Note:** The `.env.local` file is already gitignored, so your API key won't be committed.

4. **Start development servers**

   **Web app:**
   ```bash
   npm run dev
   # or
   cd apps/web && npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

   **Mobile app:**
   ```bash
   cd apps/mobile && npm run dev
   ```
   Scan the QR code with Expo Go app or press `i` for iOS simulator / `a` for Android emulator

## 🚢 Deployment

### Web App (Vercel)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Set root directory to `apps/web`
   - Add environment variables in Vercel dashboard:
     - `GROQ_API_KEY` (your Groq API key)
     - `NEXT_PUBLIC_APP_NAME` (optional, defaults to "Stack Pilot")

3. **Deploy**
   - Vercel will automatically deploy on every push to main
   - Custom domain can be configured in project settings

### Mobile App (Expo)

1. **Build for production**
   ```bash
   cd apps/mobile
   npx expo build:ios    # For iOS
   npx expo build:android # For Android
   ```

2. **Or use EAS Build (recommended)**
   ```bash
   npm install -g eas-cli
   eas login
   eas build:configure
   eas build --platform ios
   eas build --platform android
   ```

3. **Submit to stores**
   ```bash
   eas submit --platform ios
   eas submit --platform android
   ```

## 📖 Features

### Web App
- ✅ Landing page with product explanation
- ✅ Generator page with configuration form
- ✅ Server Action for AI-powered app generation
- ✅ Copy-to-clipboard output
- ✅ Clean UI with Tailwind CSS

### Mobile App
- ✅ Authentication screen
- ✅ Email + Password validation (Formik + Yup)
- ✅ Strong password requirements
- ✅ Social login UI (Google, Apple)
- ✅ NativeWind styling
- ✅ Production-ready navigation

### AI Package
- ✅ Deterministic output
- ✅ File structure generation
- ✅ Groq integration (Llama 3.3 70B)
- ✅ Type-safe configuration

## 🧪 Development Scripts

### Root Level
- `npm run dev` - Start all apps in development mode
- `npm run build` - Build all apps
- `npm run lint` - Lint all packages
- `npm run type-check` - Type check all packages
- `npm run clean` - Clean all build artifacts

### Web App
- `cd apps/web && npm run dev` - Start Next.js dev server
- `cd apps/web && npm run build` - Build for production
- `cd apps/web && npm run start` - Start production server

### Mobile App
- `cd apps/mobile && npm run dev` - Start Expo dev server
- `cd apps/mobile && npm run ios` - Open iOS simulator
- `cd apps/mobile && npm run android` - Open Android emulator

## 🗺️ Roadmap

- [ ] Add more AI model options (Claude, Gemini)
- [ ] Implement streaming responses
- [ ] Add template library
- [ ] Support for custom tech stacks
- [ ] GitHub integration (auto-create repos)
- [ ] Preview mode for generated apps
- [ ] User authentication system
- [ ] Project history and versioning
- [ ] Team collaboration features
- [ ] Analytics dashboard

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org/)
- [Expo](https://expo.dev/)
- [Turbo](https://turbo.build/)
- [Groq](https://groq.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

**Ready to ship?** This repository is production-ready and can be deployed today. 🚀

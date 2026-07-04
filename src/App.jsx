export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-zinc-50 font-sans antialiased">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
          Clean Canvas
        </h1>
        <p className="text-zinc-400 max-w-md mx-auto text-base">
          All existing code has been deleted. Your portfolio workspace is now completely empty and ready to be built from scratch.
        </p>
        <div className="pt-4">
          <span className="inline-flex items-center rounded-full bg-zinc-900 px-3 py-1 text-sm font-medium text-zinc-300 ring-1 ring-inset ring-zinc-800">
            src/App.jsx
          </span>
        </div>
      </div>
    </div>
  )
}

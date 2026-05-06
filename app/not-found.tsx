import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-xl text-center">

        <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-4">Big Willie Style</p>
        <h1 className="text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          404
        </h1>
        <h2 className="text-2xl font-bold mb-4">This page doesn&apos;t exist.</h2>
        <p className="text-gray-400 mb-10 leading-relaxed">
          The link is broken, the page moved, or you typed something wrong.
          Either way — you&apos;re not lost. Come back to home base.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 rounded-xl font-bold text-sm transition"
          >
            Back to Home
          </Link>
          <Link
            href="/products"
            className="px-6 py-3 border border-gray-700 hover:border-purple-500 rounded-xl font-bold text-sm transition text-gray-300 hover:text-white"
          >
            Browse the Shop
          </Link>
          <a
            href="https://discord.gg/ThpTfdhVv"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-[#5865F2]/40 hover:border-[#5865F2] rounded-xl font-bold text-sm transition text-[#7289da] hover:text-white"
          >
            Join Discord
          </a>
        </div>

      </div>
    </div>
  )
}

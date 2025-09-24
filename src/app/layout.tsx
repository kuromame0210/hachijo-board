import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import LocationStatusBar from "@/components/LocationStatus";
import ClientComponents from "@/components/ClientComponents";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "八丈島掲示板",
  description: "八丈島の地域掲示板",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-gray-50`}>
        <header className="bg-white border-b border-gray-300 shadow-sm">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900 flex items-center gap-2">
              🏝️ 八丈島掲示板
              <span className="text-sm font-normal text-blue-600 hidden sm:inline">〜島のコミュニティ〜</span>
            </Link>

            {/* デスクトップナビゲーション */}
            <nav className="hidden md:flex items-center gap-1">
              <Link
                href="/"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
              >
                🏠 ホーム
              </Link>
              <a
                href="/location"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
              >
                📍 位置情報
              </a>
              <a
                href="/new"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200 text-sm font-medium ml-2"
              >
                ✍️ 投稿する
              </a>
            </nav>

            {/* モバイル用右側 */}
            <div className="flex items-center gap-2">
              <ClientComponents />
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        {/* フローティング位置情報ステータス */}
        <LocationStatusBar />
        <footer className="bg-gray-50 py-6 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-4">
                <div className="text-sm text-gray-600 mb-2">スポンサー広告枠</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-300 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
                    <p className="font-semibold text-gray-600">📢 広告枠 A</p>
                    <p className="text-xs text-gray-500">300×100 サイズ対応</p>
                  </div>
                  <div className="bg-white border border-gray-300 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
                    <p className="font-semibold text-gray-600">📢 広告枠 B</p>
                    <p className="text-xs text-gray-500">300×100 サイズ対応</p>
                  </div>
                </div>
              </div>
              <div className="text-center text-xs text-gray-500 border-t border-gray-200 pt-4">
                © 2024 八丈島掲示板. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

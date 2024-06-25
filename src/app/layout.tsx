export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      <link rel="icon" href="/favicon.ico" sizes="32x32" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    </head>
    <body>
    <div className="min-h-screen flex flex-col justify-between">
      {children}
    </div>
    </body>
    </html>
  )
}

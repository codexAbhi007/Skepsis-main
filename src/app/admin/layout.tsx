

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
 

  return (
    <div className="h-screen">
     
      <main className="p-8">
        <div className="mx-auto max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  )
}


export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div>
        Header Hale
      </div>
        {children}
      <div>
        Footer Hale
      </div>
    </section>
  )
}
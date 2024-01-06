import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
}

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
        {children}
    </section>
  )
}
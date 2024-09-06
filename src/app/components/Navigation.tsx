import Link from 'next/link'

function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      {/* Update the href to reflect the new structure */}
      <Link href="/pages/about">About</Link>
    </nav>
  )
}
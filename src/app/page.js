
import Link from 'next/link'; 
import './globals.css';  



export default function HomePage() {
  return (
    <div>
        <main>
          <nav>
            <Link href="/posts">Create Posts</Link> 
          </nav>
        </main>
    </div>
  );
}

import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import './globals.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/header/Home';

export default function RootLayout({ children }) {
  return (
    <ClerkProvider dynamic>
      <html lang="en">
        <head>
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <Header />
            <Home />
            <UserButton />
            <main>{children}</main> 
          </SignedIn>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

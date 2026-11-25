import { Footer } from '../Footer';
import { Header } from '../Header';
import { SystemBar } from '../SystemBar';

export function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg-page)] text-[var(--color-text-primary)]">
      <Header />
      <SystemBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

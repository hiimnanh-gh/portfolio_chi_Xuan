import { Footer } from '../Footer';
import { Header } from '../Header';
import { SystemBar } from '../SystemBar';

export function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg-page)] text-[var(--color-text-body)]">
      <Header />
      <SystemBar />
      <main className="flex-1 overflow-x-clip">{children}</main>
      <Footer />
    </div>
  );
}

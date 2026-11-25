import { useEffect } from 'react';
import { SITE_CONFIG } from '@/config/site.config';
import { MainLayout } from '@/layouts';
import { HomePage } from '@/pages/Home';

function App() {
  useEffect(() => {
    if (SITE_CONFIG.seo?.title) {
      document.title = SITE_CONFIG.seo.title;
    }
  }, []);

  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
}

export default App;

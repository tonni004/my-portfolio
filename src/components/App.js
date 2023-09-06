import { useState, useEffect, Suspense } from 'react';

// component
import BodyTheme from './BodyTheme';
import { Loader } from './Loader/Loader';
import AnchorButtons from './AnchorButtons';
import Navigate from './Navigate';
import Bio from './Bio';
import AboutMe from './AboutMe';
import MySkills from './MySkills';
import MyProjects from './MyProjects';
import Footer from './Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BodyTheme>
      <Suspense fallback={<Loader />}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <AnchorButtons />
            <Navigate />
            <Bio />
            <AboutMe />
            <MySkills />
            <MyProjects />
            <Footer />
          </>
        )}
      </Suspense>
    </BodyTheme>
  );
}

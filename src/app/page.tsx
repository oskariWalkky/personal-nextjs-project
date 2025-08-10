import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CVSection from './components/CVSection';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <header className="border-b sticky top-0 bg-white z-50">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <span className="text-lg font-bold">Mikael Turner</span>
          <ul className="flex gap-6">
            {[
              { label: 'Home', target: 'home' },
              { label: 'About', target: 'about' },
              { label: 'Projects', target: 'projects' },
              { label: 'CV', target: 'cv' },
              { label: 'Contact', target: 'contact' },
            ].map((link) => (
              <li key={link.target}>
                <a
                  href={`#${link.target}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="flex-1 flex flex-col justify-center items-center text-center py-20"
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m Mikael</h1>
        <p className="text-xl text-gray-600 mb-6">
          Frontend Developer | Problem Solver | Scrum Master
        </p>
        <Button asChild>
          <a href="#contact">Get in Touch</a>
        </Button>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I&apos;m a frontend developer with 7+ years of experience in
            Angular, TypeScript, and modern web development. I enjoy solving
            complex problems, improving processes, and helping teams work better
            together.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <Card key={n}>
                <CardHeader>
                  <CardTitle>Project {n}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    A brief description of the project. Highlight technologies
                    used and the impact it had.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CV */}
      <section id="cv" className="py-20 bg-gray-50">
        <CVSection />
      </section>

      {/* Contact content */}
      {/* <section id="contact" className="py-20">
      </section> */}

      {/* FOOTER */}
      <footer className="border-t mt-auto">
        <div className="container mx-auto py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Mikael Turner. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

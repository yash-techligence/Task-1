/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import { Milestones, Blog } from "./components/Blog";
import { Contact, Footer } from "./components/Contact";
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="space-y-32">
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <Sidebar />
          
          <div className="lg:col-span-9 space-y-32">
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Milestones />
            <Blog />
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


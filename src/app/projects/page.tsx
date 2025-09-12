import { AllProjectsSection } from "@/sections/AllProjects";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function ProjectsPage() {
  return (
    <div>
      <ScrollProgress />
      <Header />
      <AllProjectsSection />
      <Footer />
    </div>
  );
}

export const metadata = {
  title: "All Projects - Portfolio",
  description: "Explore all my projects with advanced search and filtering capabilities.",
};
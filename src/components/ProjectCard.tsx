'use client';
import Image from 'next/image';
import { Project } from '@/data/projects';
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { Card } from './Card';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-600 text-emerald-100';
      case 'In Progress':
        return 'bg-yellow-600 text-yellow-100';
      case 'Planned':
        return 'bg-blue-600 text-blue-100';
      default:
        return 'bg-gray-600 text-gray-100';
    }
  };

  return (
    <Card 
      className="group hover:scale-[1.02] transition-all duration-500 overflow-hidden border border-white/10 hover:border-emerald-300/30"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          unoptimized={typeof project.image === 'string' && project.image.endsWith('.svg')}
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>

        {/* Year Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm text-white rounded-full text-xs font-medium border border-white/20">
            {project.year}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Category */}
        <div className="mb-3">
          <span className="text-emerald-300 text-sm font-semibold uppercase tracking-wide">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-white/70 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-700/50 text-white/80 rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-gray-600/50 text-white/60 rounded text-xs font-medium">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="text-white/90 text-sm font-semibold mb-2">Key Features:</h4>
          <ul className="text-white/70 text-xs space-y-1">
            {project.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <div className="w-1 h-1 bg-emerald-300 rounded-full flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Duration */}
        {project.duration && (
          <div className="mb-4">
            <span className="text-white/50 text-xs">
              Duration: <span className="text-white/70 font-medium">{project.duration}</span>
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn"
          >
            <span>View Project</span>
            <ArrowUpRightIcon className="size-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
          </a>
          
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-all duration-300 flex items-center justify-center group/github"
            >
              <GithubIcon className="size-4 group-hover/github:scale-110 transition-transform duration-300" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

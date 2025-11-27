"use client";

import { motion } from "framer-motion";
import { Github, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SpotlightCard from "@/components/SpotlightCard";

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <SpotlightCard className="h-full hover:border-primary/50 transition-colors hover:shadow-xl">
                                <div className="p-6 h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <Code2 size={24} />
                                        </div>
                                        <div className="flex gap-3">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-primary transition-colors z-10"
                                                aria-label="View Source"
                                            >
                                                <Github size={20} />
                                            </a>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-muted-foreground mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.split(", ").map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

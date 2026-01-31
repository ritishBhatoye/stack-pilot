export interface AppConfig {
  name: string;
  description: string;
  features: string[];
  techStack: {
    frontend: string[];
    backend: string[];
    mobile: string[];
  };
}

export interface GeneratedFile {
  path: string;
  content: string;
}

export interface GenerationResult {
  files: GeneratedFile[];
  structure: string[];
}

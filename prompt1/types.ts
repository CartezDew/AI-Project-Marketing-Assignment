import React from 'react';

export enum PersonaType {
  TEDDY = 'TEDDY',
  LESLEY = 'LESLEY'
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  persona: PersonaType;
  image: string;
  content: React.ReactNode;
}

export interface VideoEmbed {
  id: string;
  title: string;
  url: string; // Used for iframe src
  thumbnail: string;
}


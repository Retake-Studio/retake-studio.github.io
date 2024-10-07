import React from 'react';
import { IconBrandGithub, IconTag } from '@tabler/icons-react';

interface ButtonProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  side?: 'left' | 'right';
  link?: string;
  label?: string;
}

export const Button: React.FC<ButtonProps> = ({ side = 'left', children, icon, link, label }) => {
  return (
    <div className="h-fit w-fit">
      <a href={link}>
        <div className="flex w-26 items-center justify-center gap-1.5 rounded-sm border border-black p-1.5 text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black mt-2">
          {side === 'left' && <div>{icon}</div>}
          {children || label}
          {side === 'right' && <div>{icon}</div>}
        </div>
      </a>
    </div>
  );
};

export const GithubRepoButton: React.FC<ButtonProps['link']> = ({ link }) => {
  return (
    <div className="flex flex-wrap gap-1">
      <Button icon={<IconBrandGithub />} link={`${link}`} label="Github" />
      <Button icon={<IconTag />} link={`${link}/releases`} label="Releases" />
    </div>
  );
}
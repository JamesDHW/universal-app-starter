import { ReactNode } from 'react';

export default function MarkdownWrapper({ markdown }: { markdown: ReactNode }) {
  return (
    <div>
      <>{markdown}</>
    </div>
  );
}

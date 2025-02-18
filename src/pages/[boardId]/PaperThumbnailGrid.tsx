/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {MultiplePaper} from '@type/model';

import {PaperThumbnail} from './PaperThumbnail';

interface Params {
  papers: MultiplePaper[];
  isAdmin: boolean;
}

const gridStyle = css({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
});

export function PaperThumbnailGrid({papers, isAdmin}: Params) {
  return (
    <div css={gridStyle}>
      {papers.map(paper => (
        <PaperThumbnail key={paper.id} paper={paper} isAdmin={isAdmin} />
      ))}
    </div>
  );
}

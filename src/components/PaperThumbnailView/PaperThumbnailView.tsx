/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {MultiplePaper} from '@type/model';

import {PaperThumbnail} from '../PaperThumbnail/PaperThumbnail';

interface Params {
  papers: MultiplePaper[];
}

const gridStyle = css({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
});

export function PaperThumbnailView({papers}: Params) {
  return (
    <div css={gridStyle}>
      {papers.map(paper => (
        <PaperThumbnail key={paper.paperId} paper={paper} />
      ))}
    </div>
  );
}

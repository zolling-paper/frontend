export interface Typography {
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
}

export type TypographyTokenKey =
  | 'head'
  | 'title'
  | 'subTitle'
  | 'bodyBold'
  | 'body'
  | 'smallBodyBold'
  | 'smallBody'
  | 'captionBold'
  | 'caption'
  | 'tiny';

export type TypographyTokens = Record<TypographyTokenKey, Typography>;

export const TYPOGRAPHY: TypographyTokens = {
  head: {
    fontFamily: 'NeoDunggeunmo',
    fontSize: '3rem',
    lineHeight: '1.5',
    fontWeight: '700',
  },
  title: {
    fontFamily: 'NeoDunggeunmo',
    fontSize: '2rem',
    lineHeight: '1.5',
    fontWeight: '700',
  },
  subTitle: {
    fontFamily: 'NeoDunggeunmo',
    fontSize: '1.5rem',
    lineHeight: '1.5',
    fontWeight: '700',
  },
  bodyBold: {
    fontFamily: 'NeoDunggeunmo',
    fontSize: '1rem',
    lineHeight: '1.5',
    fontWeight: '700',
  },
  body: {
    fontFamily: 'NeoDunggeunmo',
    fontSize: '1rem',
    lineHeight: '1.5',
    fontWeight: '400',
  },
  smallBodyBold: {
    fontFamily: 'NeoDunggeunmo',
    fontSize: '0.875rem',
    lineHeight: '1.5',
    fontWeight: '700',
  },
  smallBody: {
    fontFamily: 'NeoDunggeunmo',
    fontSize: '0.875rem',
    lineHeight: '1.5',
    fontWeight: '400',
  },
  captionBold: {
    fontFamily: 'NeoDunggeunmo',
    fontSize: '0.75rem',
    lineHeight: '1.5',
    fontWeight: '700',
  },
  caption: {
    fontFamily: 'NeoDunggeunmo',
    fontSize: '0.75rem',
    lineHeight: '1.5',
    fontWeight: '400',
  },
  tiny: {
    fontFamily: 'NeoDunggeunmo',
    fontSize: '0.625rem',
    lineHeight: '1.5',
    fontWeight: '400',
  },
};

export default TYPOGRAPHY;

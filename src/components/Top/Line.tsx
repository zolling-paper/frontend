/** @jsxImportSource @emotion/react */
import {HStack} from '../Stack';
import {Text} from '../Text/Text';

interface Props {
  text: string;
  emphasize?: string[];
}

export default function Line({text, emphasize = []}: Props) {
  const getTextElements = ({text, emphasize = []}: Props) => {
    if (emphasize.length === 0) return [text];

    const regexPattern = new RegExp(`(${emphasize.join('|')})`, 'g');
    return text.split(regexPattern).filter(Boolean);
  };

  const elements = getTextElements({text, emphasize});

  return (
    <HStack>
      {elements.map((text, index) => {
        return (
          <Text
            key={`${text}-${index}`}
            size="subTitle"
            textColor={emphasize.includes(text) ? 'secondary' : 'gray'}
            style={{whiteSpace: 'pre'}}
            aria-hidden={true}
          >
            {`${text}`}
          </Text>
        );
      })}
    </HStack>
  );
}

import React from 'react';
import useModel from '../useModel';

import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string
  overlayNode: React.ReactNode
}

function ModelSection({ modelName, overlayNode, children, ...props }: Props) {
  const { registerModel } = useModel(modelName)

  const sectionRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (sectionRef.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionRef
      })
    }
  }, [modelName, overlayNode, registerModel])

  return (
    <Container ref={sectionRef} {...props}>
      {children}
    </Container>
  );
};

export default ModelSection;

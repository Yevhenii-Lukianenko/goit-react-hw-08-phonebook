import { RotatingLines } from 'react-loader-spinner';

export const LoaderButton = () => (
  <RotatingLines
    strokeColor="black"
    strokeWidth="5"
    animationDuration="0.75"
    visible={true}
    width="20px"
  />
);

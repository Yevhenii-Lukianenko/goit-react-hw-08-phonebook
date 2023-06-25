import { RotatingLines } from 'react-loader-spinner';

export const LoaderContacts = () => (
  <div
    style={{
      position: 'fixed',
      top: '1px',
      left: '1px',
      zIndex: '100',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: 'whitesmoke',
    }}
  >
    <RotatingLines
      strokeColor="black"
      strokeWidth="5"
      animationDuration="0.75"
      width="50"
      visible={true}
    />
  </div>
);

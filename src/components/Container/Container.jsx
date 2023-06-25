import PropTypes from 'prop-types';
import { MainContainer } from './Container.styled';

export const Container = ({ children }) => (
  <MainContainer>{children}</MainContainer>
);

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

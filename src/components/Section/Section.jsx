import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => (
  <div className={css.box}>
    <h2>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string,
};
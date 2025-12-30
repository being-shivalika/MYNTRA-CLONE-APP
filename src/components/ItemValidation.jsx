import PropTypes from "prop-types";

export const itemShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  item_name: PropTypes.string.isRequired,
  current_price: PropTypes.number.isRequired,
  original_price: PropTypes.number.isRequired,
  discount_percentage: PropTypes.number.isRequired,
  return_period: PropTypes.number,
  delivery_date: PropTypes.string,
  rating: PropTypes.shape({
    stars: PropTypes.number,
    count: PropTypes.number,
  }),
});

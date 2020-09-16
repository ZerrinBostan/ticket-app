import React from 'react';
import Icon from './icon/index';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Table = ({ data = [] }) => (
  <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">
          <Icon icon="ticket" size={22} />
        </th>
        <th scope="col">Name</th>
        <th scope="col">Age Restrictions</th>
        <th scope="col">Date</th>
        <th scope="col" />
      </tr>
    </thead>
    <tbody>
      {data.length > 0 &&
        data.map((item) => {
          const {
            id,
            images,
            name,
            locale,
            dates: {
              start: { localDate },
            },
          } = item;
          return (
            <tr>
              <td>
                <img
                  src={images[7].url}
                  alt="ticket-img"
                  class="img-thumbnail"
                />
              </td>
              <td>{name}</td>
              <td>{locale}</td>
              <td>{localDate}</td>
              <td>
                <Link to={`ticket-detail/${id}`}>
                  <button type="button" class="btn btn-outline-dark d-flex">
                    <Icon icon="file-text" size={22} />
                    Detail
                  </button>
                </Link>
              </td>
            </tr>
          );
        })}
    </tbody>
  </table>
);

Table.propTypes = {
  data: PropTypes.arrayOf({
    id: PropTypes.string,
    images: PropTypes.string,
    name: PropTypes.string,
    locale: PropTypes.string,
    localDate: PropTypes.string,
  }).isRequired,
};

export default Table;

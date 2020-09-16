import React, { useState, useCallback, useEffect } from 'react';
import Table from '../components/Table';
import axios from 'axios';
import Header from '../components/Header';
import PaginationItem from '../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setTicketList } from '../stores/ticket/actions';

const KEY = 'UFTpxHGts9GfA7G1a01q0SoLhN0MlTQG';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';

const Home = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.ticketReducer.ticketList);
  const [paginationData, paginationSetData] = useState();
  const [activePage, setActivePage] = useState(1);

  const fetchTicket = useCallback(async () => {
    const result = await axios.get(BASE_URL, {
      params: {
        apikey: KEY,
        page: activePage,
      },
    });
    const { page } = result.data;

    dispatch(setTicketList(result.data['_embedded'].events));
    paginationSetData(page);
  }, [dispatch, activePage]);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  useEffect(() => {
    fetchTicket();
  }, [fetchTicket]);

  return (
    <div className="container home">
      <Header text="TICKET" className="mb-4" />
      <Table data={events} />
      {paginationData && (
        <PaginationItem
          pageCount={paginationData.totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Home;

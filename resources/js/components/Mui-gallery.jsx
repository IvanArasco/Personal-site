import * as React from 'react';
import { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function MuiGallery({ dataSet, cols }) {
  const itemsPerPage = 12;
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(dataSet.length / itemsPerPage);

  // Retrieve actual elements on page
  const paginatedData = dataSet.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="block-wrapper block-gallery">
      <div className="container">
        <ImageList className="galleryList" cols={cols}>
          {paginatedData.map((data, index) => (
            <ImageListItem key={index}>
              <img src={data.img} alt={data.title} />
              <ImageListItemBar
                title={data.title}
                subtitle={data.place}
              />
            </ImageListItem>
          ))}
        </ImageList>

        {pageCount > 1 && (
          <Stack spacing={2} alignItems="center" mt={2}>
            <Pagination
              count={pageCount}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </Stack>
        )}
      </div>
    </div>
  );
}

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function MuiGallery({ dataSet, cols }) {
  return (
    <div className="block-wrapper block-gallery">
        <div className="container">
            <ImageList className="galleryList" cols={cols}>
                {dataSet.map((data) => (
                    <ImageListItem>
                    <img
                        src={data.img}
                        alt={data.title}
                    />
                    <ImageListItemBar
                        title={data.title}
                        subtitle={data.place}
                    />
                    </ImageListItem>
                ))
                }
            </ImageList>
        </div>
    </div>
  );
}
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from '../../../components/Button';

import BookInfoStore from '../../../store/BookInfoStore';

const BookInfoStyle = styled.div`
width: 100%;
padding: 0 16px 16px 16px;
box-sizing: border-box;
`;

const BookInfoHeaderStyle = styled.div`
display: flex;
justify-content: flex-end;
width: 100%;
margin: 16px 0;
box-sizing: border-box;
`;

const BookInfoContent = styled.div`
width: 100%;
display: grid;
gap: 16px;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
box-sizing: border-box;
`;

const BookImageWrapper = styled.div`
display: flex;
justify-content: center;
width: 100%;
`;

const BookImage = styled.img`
max-width: 320px;
max-height: 500px;
`;

const BookData = styled.div`
display: flex;
flex-direction: column;
`;

const BookCategories = styled.div`
margin-bottom: 16px;
font-size: 20px;
font-weight: 300;
`;

const BookTitle = styled.div`
margin-bottom: 8px;
font-size: 24px;
font-weight: 500;
`;

const BookAuthors = styled.div`
margin-bottom: 16px;
font-size: 18px;
font-weight: 300;
`;

const BookDescription = styled.div`
`;

const imageSizes = [
  //'extraLarge',
  'large',
  'medium',
  'small',
  'thumbnail',
  'smallThumbnail'
];

const BookInfo = observer(() => {
  const { id, removeBook } = BookInfoStore;

  const [bookInfo, setBookInfo] = useState(null);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then(response => response.json())
      .then(data => setBookInfo(data));
  }, []);

  return (
    <BookInfoStyle>
      <BookInfoHeaderStyle>
        <Button onClick={removeBook}>Закрыть</Button>
      </BookInfoHeaderStyle>
      {bookInfo && (
        <BookInfoContent>
          <BookImageWrapper>
            {bookInfo.volumeInfo.imageLinks && (
              <BookImage src={bookInfo.volumeInfo.imageLinks[
              imageSizes.find(size => bookInfo.volumeInfo.imageLinks[size])
            ].replace('http', 'https')} />
            )}
          </BookImageWrapper>
          <BookData>
            {bookInfo.volumeInfo.categories && (
              <BookCategories>
                {bookInfo.volumeInfo.categories.join(', ')}
              </BookCategories>
            )}
            {bookInfo.volumeInfo.title && (
              <BookTitle>
                {bookInfo.volumeInfo.title}
              </BookTitle>
            )}
            {bookInfo.volumeInfo.authors && (
              <BookAuthors>
                {bookInfo.volumeInfo.authors.join(', ')}
              </BookAuthors>
            )}
            {bookInfo.volumeInfo.description && (
              <BookDescription>
                {bookInfo.volumeInfo.description}
              </BookDescription>
            )}
          </BookData>
        </BookInfoContent>
      )}
    </BookInfoStyle>
  );
});

export default BookInfo;
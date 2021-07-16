import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import BookInfoStore from '../../../store/BookInfoStore';

const BookCardStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 32px 16px 16px 16px;
background: #f6f5f5;
border-radius: 8px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
cursor: pointer;

&:hover[disabled] {
  background: #f6f5f5;
}

&:hover {
  background: #d3e0ea;
}
`;

const BookThumbnailWrapperStyle = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 200px;
margin-bottom: 16px;
`;

const BookThumbnailStyle = styled.img`
height: 100%;
`;

const BookCategoryStyle = styled.div`
height: 18px;
margin-bottom: 8px;
font-size: 14px;
font-weight: 500;
text-align: center;
overflow: hidden;
color: #1687a7;
`;

const BookTitleStyle = styled.div`
display: flex;
align-content: space-between;
height: 44px;
margin-bottom: 8px;
font-size: 18px;
font-weight: 600;
text-align: center;
overflow: hidden;
`;

const BookAuthorsStyle = styled.div`
height: 36px;
font-size: 16px;
text-align: center;
overflow: hidden;
`;

const BookCard = observer(({ book }: any) => {
  const { setBook } = BookInfoStore;

  return (
    <BookCardStyle onClick={() => setBook(book.id)}>
      <BookThumbnailWrapperStyle>
        {book.volumeInfo.imageLinks && (
          <BookThumbnailStyle src={book.volumeInfo.imageLinks.thumbnail} />
        )}
      </BookThumbnailWrapperStyle>
      <BookCategoryStyle>
        {book.volumeInfo.categories?.[0]}
      </BookCategoryStyle>
      <BookTitleStyle>
        {book.volumeInfo.title}
      </BookTitleStyle>
      <BookAuthorsStyle>
        {book.volumeInfo.authors?.join(', ')}
      </BookAuthorsStyle>
    </BookCardStyle>
  );
});

export default BookCard;
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  styled,
} from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const StyledOffer = styled(Box)`
  font-size: 14px;
  vertical: align;
  & p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const StyledBadge = styled(LocalOfferIcon)`
  color: #14be47;
  font-size: 15px;
  margin-right: 10px;
  pading: 1px;
`;

const ColumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;
  width: 80%;

  & > td {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const ProductDetail = ({ product }) => {
  const adURL =
    'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  return (
    <>
      <Typography>{product.name}</Typography>
      <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
        8 Ratings & 1 Reviews
      </Typography>
      <Typography>
        <span style={{ fontSize: 28 }}>₹{product.price}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={{ color: '#878787' }}>
          <strike>₹9000</strike>
        </span>
        &nbsp;&nbsp;&nbsp;
        <span style={{ color: '#388E3C' }}>{product.discount} off</span>
      </Typography>
      <Typography variant='h6' style={{ fontWeight: 600 }}>
        Availabale Offers
      </Typography>
      <StyledOffer>
        <Typography>
          <StyledBadge />
          Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transaction
          on order of ₹200 and above T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Bank Offer5% Cashback on Flipkart Axis Bank CardT&C
        </Typography>
        <Typography>
          <StyledBadge />
          Bank Offer10% off up to ₹1250 on HDFC Bank Credit Card EMI Txns,
          Tenure: 6 months, Min Txn Value: ₹7500 T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Special PriceGet extra 33% off (price inclusive of cashback/coupon)
          T&C{' '}
        </Typography>
      </StyledOffer>

      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Seller</TableCell>
            <TableCell>
              <span style={{ color: '#2874f0' }}>SuperComNet</span>
              <Typography>GST invoice available</Typography>
              <Typography>View more sellers starting from ₹329</Typography>
            </TableCell>
          </ColumnText>

          <TableRow>
            <TableCell colSpan={2}>
              <img src={adURL} style={{ width: 390 }} />
            </TableCell>
          </TableRow>

          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Description</TableCell>
            <TableCell style={{ width: '100%' }}>
              {product.description}
            </TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;

import {NextPage} from 'next';
import {
  Box,
  Grid,
  IconButton,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import Title from '@/components/layout/Title';
import {Delete, Edit} from '@mui/icons-material';
import Image from 'next/image';

const HeadCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey.A200,
  },
}));

const MePage: NextPage = () => {
  const theme = useTheme();
  return (
    <Box>
      <Title title="내 정보">
        <Stack direction="row" spacing={1}>
          <IconButton size="medium" color="primary">
            <Edit />
          </IconButton>
          <IconButton size="medium" color="error">
            <Delete />
          </IconButton>
        </Stack>
      </Title>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            fontWeight="bold"
            color={theme.palette.primary.main}
          >
            기본 정보
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Image
            src="https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927"
            alt="user profile picture"
            width={150}
            height={150}
          />
        </Grid>
        <Grid item xs={10}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Typography variant="inherit" fontWeight="bold">
                이름
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="inherit">박종철</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="inherit" fontWeight="bold">
                주소
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="inherit">
                서울 특별시 양천구 오목로 15길 32-22, 표준빌라 A동 1층 2호
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="inherit" fontWeight="bold">
                성별
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="inherit">남자</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="inherit" fontWeight="bold">
                생년월일
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="inherit">1982년 5월 8일</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="inherit" fontWeight="bold">
                연락처
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="inherit">010-2994-4419</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="inherit" fontWeight="bold">
                이메일
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="inherit">jongchal4419@gmail.com</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            fontWeight="bold"
            color={theme.palette.primary.main}
          >
            학력 정보
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <HeadCell>Dessert (100g serving)</HeadCell>
                  <HeadCell align="right">Calories</HeadCell>
                  <HeadCell align="right">Fat&nbsp;(g)</HeadCell>
                  <HeadCell align="right">Carbs&nbsp;(g)</HeadCell>
                  <HeadCell align="right">Protein&nbsp;(g)</HeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            fontWeight="bold"
            color={theme.palette.primary.main}
          >
            경력 정보
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <HeadCell>Dessert (100g serving)</HeadCell>
                  <HeadCell align="right">Calories</HeadCell>
                  <HeadCell align="right">Fat&nbsp;(g)</HeadCell>
                  <HeadCell align="right">Carbs&nbsp;(g)</HeadCell>
                  <HeadCell align="right">Protein&nbsp;(g)</HeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MePage;

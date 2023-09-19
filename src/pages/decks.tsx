import {
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TextField,
  Typography,
} from '@/components'
import { useGetDecksQuery } from '../services/decks/decks.ts'

import s from './decks.module.scss'

export const Decks = () => {
  const decks = useGetDecksQuery()

  return (
    <Card>
      <div className={s.root}>
        <div className={s.header}>
          <Typography variant="large">Decks</Typography>
          <Button>Add new deck</Button>
        </div>
        <div className={s.filters}>
          <TextField placeholder="Search" search />
          <Button variant={'secondary'}>Clear filters</Button>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Cards</TableHeadCell>
              <TableHeadCell>Last Updated</TableHeadCell>
              <TableHeadCell>Created by</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {decks.data?.items?.map(deck => {
              return (
                <TableRow key={deck.id}>
                  <TableCell>{deck.name}</TableCell>
                  <TableCell>{deck.cardsCount}</TableCell>
                  <TableCell>{new Date(deck.updated).toLocaleString('en-GB')}</TableCell>
                  <TableCell>{deck.author.name}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
